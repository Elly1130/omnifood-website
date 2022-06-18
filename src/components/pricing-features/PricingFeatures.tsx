import styled from 'styled-components';
import { Grid } from '../GlobalStyle';
import { Container } from '../how-it-works/HowItWorks';

import Features from './features/Features';
import Pricing from './pricing/Pricing';

const PricingSection = styled.section`
  padding: 9.6rem 0;
`;

const ContainerGrid = styled(Grid)`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

const Aside = styled.aside`
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
`;

const PricingFeatures = () => {
  return (
    <PricingSection>
      <Pricing />
      <ContainerGrid>
        <Aside>Prices include all applicable taxes. Users can cancel at any time. Both plans include the following:</Aside>
      </ContainerGrid>
      <Features />
    </PricingSection>
  );
};

export default PricingFeatures;