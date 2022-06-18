export type FeatureType = {
  title: string;
  text: string;
};

const FeatureData: FeatureType[] = [
  {
    title: 'Never cook again!',
    text: 'Our subscriptions cover 365 days per year, even including major holidays.',
  },
  {
    title: 'Local and organic',
    text: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
  },
  {
    title: 'No waste',
    text: 'All our partners only use reusable containers to package all your meals.',
  },
  {
    title: 'Pause anytime',
    text: 'Going on vacation? Just pause your subscription, and we refund unused days.',
  },
];

export const getFeatureData = (): FeatureType[] => {
  return FeatureData;
};
