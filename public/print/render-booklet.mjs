#!/usr/bin/env node
/**
 * Six-page A4 portrait house book.
 * QR encodes https://tuwafute-machozi-tours.vercel.app
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let QRCode = null;
try {
  QRCode = require("/tmp/print-tools/node_modules/qrcode");
} catch {
  try {
    QRCode = require("qrcode");
  } catch {
    QRCode = null;
  }
}
const puppeteer = require("puppeteer-core");

const DIR = path.dirname(fileURLToPath(import.meta.url));
const QR_URL = "https://tuwafute-machozi-tours.vercel.app";
const CHROME = process.env.CHROME || "/usr/bin/google-chrome";
const MM = 96 / 25.4;
const A4 = { w: 210 * MM, h: 297 * MM };

async function ready(page) {
  await page.evaluateHandle("document.fonts.ready");
  await new Promise((r) => setTimeout(r, 800));
}

async function main() {
  if (QRCode) {
    await QRCode.toFile(path.join(DIR, "qr.png"), QR_URL, {
      margin: 1,
      width: 720,
      errorCorrectionLevel: "M",
      color: { dark: "#1C1914", light: "#FFFFFF" },
    });
    console.log("QR encoded:", QR_URL);
  } else {
    console.log("Using existing qr.png");
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--allow-file-access-from-files",
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: Math.round(A4.w),
    height: Math.round(A4.h * 6),
    deviceScaleFactor: 2,
  });
  await page.goto("file://" + path.join(DIR, "booklet.html"), {
    waitUntil: "networkidle0",
  });
  await ready(page);

  await page.pdf({
    path: path.join(DIR, "booklet.pdf"),
    width: "210mm",
    height: "297mm",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  console.log("Wrote booklet.pdf");

  const pages = await page.$$(".page");
  for (let i = 0; i < pages.length; i++) {
    const n = String(i + 1).padStart(2, "0");
    await pages[i].screenshot({
      path: path.join(DIR, `booklet-${n}.png`),
      type: "png",
    });
    console.log("Wrote booklet-" + n + ".png");
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
