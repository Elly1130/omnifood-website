export type TestimonialType = {
  img: string;
  alt: string;
  text: string;
  name: string;
};

const TestimonialData = [
  {
    img: '/img/customers/dave.jpg',
    alt: 'Photo of Customer Dave',
    text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    name: 'Dave Bryson',
  },
  {
    img: '/img/customers/ben.jpg',
    alt: 'Photo of Customer Ben',
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: 'Ben Hadley',
  },
  {
    img: '/img/customers/steve.jpg',
    alt: 'Photo of Customer Steve',
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: 'Steve Miller',
  },
  {
    img: '/img/customers/hannah.jpg',
    alt: 'Photo of Customer Hannah',
    text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
    name: 'Hannah Smith',
  },
];

export const getTestimonialData = (): TestimonialType[] => {
  return TestimonialData;
};
