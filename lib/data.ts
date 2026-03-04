export type Memory = {
  date: string;
  title: string;
  description: string;
  photos: string[];
};

export type FutureWish = {
  title: string;
  detail: string;
};

export const memoryHighlights: Memory[] = [
  {
    date: "2003-11-30",
    title: "The Beginning",
    description: "The first chapter of our shared story started with warmth and wonder.",
    photos: [
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    date: "2014-06-18",
    title: "Summer in the City",
    description: "Golden evening walks, iced coffee, and endless talks about the future.",
    photos: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    date: "2021-12-24",
    title: "Snowlight Promises",
    description: "A quiet winter night with city lights and heartfelt promises.",
    photos: [
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const galleryPhotos: string[] = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1529338296731-c4280a44fc40?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1000&q=80",
];

export const futureWishes: FutureWish[] = [
  {
    title: "Northern Lights Journey",
    detail: "A quiet winter trip to watch the aurora together with hot cocoa.",
  },
  {
    title: "Seaside Home Retreat",
    detail: "A minimalist weekend home filled with books, plants, and sunrise views.",
  },
  {
    title: "Anniversary Film",
    detail: "Document every year and create a cinematic memory archive.",
  },
  {
    title: "World Food Journal",
    detail: "Taste one new cuisine each month and keep a shared journal.",
  },
];

export const starterMessages = [
  "Every ordinary day becomes extraordinary with you.",
  "Thank you for staying soft, brave, and true.",
  "Let us keep choosing each other—again and again.",
];
