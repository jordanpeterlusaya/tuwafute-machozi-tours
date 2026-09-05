"use client";

import { motion } from "framer-motion";
import { cx } from "@/lib/utils";

export function BrandMorph({
  className,
  active = true,
}: {
  className?: string;
  active?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 220 220"
      className={cx("overflow-visible", className)}
      role="img"
      aria-label="A teardrop transforming into a palm, wave and sunrise"
      initial={false}
      animate={active ? "active" : "idle"}
    >
      <motion.path
        d="M110 18C110 18 52 84 52 135c0 34 26 61 58 61s58-27 58-61C168 84 110 18 110 18Z"
        fill="none"
        stroke="#d8b875"
        strokeWidth="2"
        variants={{
          idle: { pathLength: 0.15, opacity: 0.45 },
          active: { pathLength: 1, opacity: 1 },
        }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.g
        variants={{
          idle: { opacity: 0, y: 18 },
          active: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.45, duration: 0.9 }}
      >
        <path
          d="M72 145c16 11 27 11 38 0 11 11 22 11 38 0M66 157c18 10 31 10 44 0 13 10 26 10 44 0"
          fill="none"
          stroke="#69d1c6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </motion.g>
      <motion.g
        style={{ transformOrigin: "110px 72px" }}
        variants={{
          idle: { opacity: 0, scale: 0.5, rotate: -10 },
          active: { opacity: 1, scale: 1, rotate: 0 },
        }}
        transition={{ delay: 0.75, duration: 1, type: "spring", bounce: 0.25 }}
      >
        <path d="M110 70v67" stroke="#d8b875" strokeWidth="3" strokeLinecap="round" />
        {[0, 1, 2, 3, 4, 5].map((leaf) => {
          const angle = (leaf / 6) * Math.PI * 2;
          const x = 110 + Math.cos(angle) * 34;
          const y = 72 + Math.sin(angle) * 18;
          return (
            <path
              key={leaf}
              d={`M110 72 Q ${(110 + x) / 2} ${y - 12} ${x} ${y}`}
              fill="none"
              stroke="#6f9b74"
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}
      </motion.g>
      <motion.g
        variants={{
          idle: { opacity: 0, scale: 0 },
          active: { opacity: 1, scale: 1 },
        }}
        style={{ transformOrigin: "110px 52px" }}
        transition={{ delay: 1.05, duration: 0.8 }}
      >
        <circle cx="110" cy="52" r="13" fill="none" stroke="#e5aa65" strokeWidth="2" />
        <circle cx="110" cy="52" r="4" fill="#e5aa65" />
      </motion.g>
    </motion.svg>
  );
}
