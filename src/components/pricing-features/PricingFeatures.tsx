import styled from 'styled-components';
import Features from './features/Features';

import Pricing from './pricing/Pricing';

const PricingSection = styled.section`
  padding: 9.6rem 0;
`;

const PricingFeatures = () => {
  return (
    <PricingSection>
      <Pricing />
      <Features />
    </PricingSection>
  );
};

export default PricingFeatures;