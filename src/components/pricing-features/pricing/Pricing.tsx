import styled from 'styled-components';
import { getPricingPlanData, PricingPlanType } from '../../../data/Pricing';
import { Grid, Grid2Cols } from '../../GlobalStyle';

import { Container } from '../../how-it-works/HowItWorks';
import Heading from '../../ui/Heading';
import PricingPlan from './PricingPlan';

const ContainerGrid = styled(Grid)`
  ${Grid2Cols}
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

export type PricingPlanProps = {
  data: PricingPlanType;
};

const Pricing = () => {
  const pricingPlanData = getPricingPlanData();

  return (
    <>
      <Container>
        <Heading classification='subheading'>Pricing</Heading>
        <Heading classification='secondary'>Eating well without breaking the bank</Heading>
      </Container>
      <ContainerGrid>
        {pricingPlanData.map(data => <PricingPlan key={data.name} data={data} />)}
      </ContainerGrid>
    </>
  );
};

export default Pricing;