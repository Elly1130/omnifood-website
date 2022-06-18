export type MealType = {
  title: string;
  img: string;
  category: string[];
  calories: number;
  nutriScore: number;
  averageRating: number;
  NumberReview: number;
};

const MealData = [
  {
    title: 'Japanese Gyozas',
    img: 'img/meals/meal-1.jpg',
    category: ['vegetarian'],
    calories: 650,
    nutriScore: 74,
    averageRating: 4.9,
    NumberReview: 537,
  },
  {
    title: 'Avocado Salad',
    img: 'img/meals/meal-2.jpg',
    category: ['vegan', 'paleo'],
    calories: 400,
    nutriScore: 92,
    averageRating: 4.8,
    NumberReview: 441,
  },
];

export const getMealData = (): MealType[] => {
  return MealData;
};
