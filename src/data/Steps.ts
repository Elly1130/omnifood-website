export type StepDataType = {
  id: string;
  title: string;
  description: string;
  img: string;
  alt: string;
};

const StepData = [
  {
    id: '01',
    title: 'Tell us what you like (and what not)',
    description:
      'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
    img: '/img/app/app-screen-1.png',
    alt: 'iPhone app preferences selection screen',
  },
  {
    id: '02',
    title: 'Approve your weekly meal plan',
    description:
      'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
    img: '/img/app/app-screen-2.png',
    alt: 'iPhone app meal approving plan',
  },
  {
    id: '03',
    title: 'Receive meals at convenient time',
    description:
      'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
    img: '/img/app/app-screen-3.png',
    alt: 'iPhone app delivery screen',
  },
];

export const getStepData = (): StepDataType[] => {
  return StepData;
};
