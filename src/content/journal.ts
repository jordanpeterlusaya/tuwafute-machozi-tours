export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  read: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const journal: JournalEntry[] = [
  {
    slug: "the-meaning-of-machozi",
    title: "The meaning of Machozi",
    date: "March 2026",
    read: "4 min",
    image: "/images/hero-nungwi.jpg",
    excerpt:
      "Why a luxury travel house chose a name that means let us wipe their tears — and why elegance and empathy are not opposites.",
    body: [
      "Tuwafute Machozi is not a charity brand wearing a safari hat. It is a travel house that refuses the old split between beauty and responsibility.",
      "In Kiswahili the phrase is an invitation: let us find their tears, and wipe them. The guests we want already travel with that instinct. They want the dhow, the crater, the spice farm — and they want to know that the village at the edge of the photograph is not being used as scenery.",
      "Our work is to design journeys so complete that giving back is not an add-on. It is a thread: a school visit that is actually a conversation, a turtle sanctuary that is funded, a guide who is paid properly, a reef that is not stood upon.",
      "Luxury, as we understand it, is attention. Attention to light, to timing, to people. The logo’s teardrop is not sadness performed for donors. It is a compass.",
    ],
  },
  {
    slug: "how-to-arrive-in-stone-town",
    title: "How to arrive in Stone Town",
    date: "January 2026",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1589197331516-4d84b72eb2e3?auto=format&fit=crop&w=1600&q=80",
    excerpt:
      "Do not rush the old town. The alleys have a temperature, a soundtrack, and a correct first hour.",
    body: [
      "Land, clear, and resist the north-coast transfer until you have slept one night inside the coral walls.",
      "The first walk should be late afternoon, when the stone releases its heat and the carved doors are in relief. A good guide speaks less than you expect. The town does the talking — bicycle bells, clove sacks, the call to prayer moving from one roof to another.",
      "Eat upstairs. Look at the harbour. Tomorrow can be spices, or Prison Island, or nothing. Stone Town rewards the guest who does not treat it as a corridor.",
    ],
  },
  {
    slug: "tide-is-the-itinerary",
    title: "The tide is the itinerary",
    date: "November 2025",
    read: "3 min",
    image: "/images/nungwi-boats.jpg",
    excerpt:
      "On the east coast, clocks are a suggestion. The moon writes the day.",
    body: [
      "Guests sometimes ask why we will not confirm The Rock to the minute six weeks out. The honest answer is the Indian Ocean.",
      "At low tide you walk to the restaurant. At high tide you take a boat. At the wrong tide, Kuza is a different hour, the seaweed farms are underwater, and the sandbank you wanted is a rumour.",
      "This is not inconvenience. It is the island’s intelligence. We design around it, and the day becomes more beautiful for being obedient to water.",
    ],
  },
  {
    slug: "after-the-photograph",
    title: "After the photograph",
    date: "August 2025",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
    excerpt:
      "Safari photographs are easy. What happens to the community beside the park is the longer question.",
    body: [
      "A lion in golden grass will always look like a masterpiece. The harder image is the village that sits on the unphotographed side of the crater rim.",
      "Our safari partners are chosen for guiding first, and for how they employ, buy, and listen. When we say social impact we do not mean a logo on a water well. We mean wages, school terms, and the dignity of not being a stop on a poverty tour.",
      "If you travel with us, you will still get the masterpiece. You will also get the conversation after it.",
    ],
  },
];

export function getJournal(slug: string) {
  return journal.find((item) => item.slug === slug);
}
