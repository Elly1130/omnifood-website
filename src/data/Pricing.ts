export type PricingPlanType = {
  name: string;
  price: number;
  text: string;
  specifications: string[];
};

const PlanData: PricingPlanType[] = [
  {
    name: 'starter',
    price: 399,
    text: "per month. That's just $13 per meal!",
    specifications: [
      '1 meal per day',
      'Order from 11am to 9pm',
      'Delivery is free',
      '',
    ],
  },
  {
    name: 'complete',
    price: 649,
    text: "per month. That's just $11 per meal!",
    specifications: [
      '2 meals per day',
      'Order 24/7',
      'Delivery is free',
      'Get access to latest recipes',
    ],
  },
];

export const getPricingPlanData = (): PricingPlanType[] => {
  return PlanData;
};
