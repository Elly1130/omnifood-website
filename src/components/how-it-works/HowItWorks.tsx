import styled from 'styled-components';
import { Grid, Grid2Cols, GridCenterV, device } from '../GlobalStyle';
import Heading from '../ui/Heading';
import Step from './step/Step';

const SectionHow = styled.section`
  padding: 9.6rem 0;
`;

export const ContainerGrid = styled(Grid)`
  ${Grid2Cols}
  ${GridCenterV}
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  @media (${device.phone}) {
    div:nth-child(3) {
      grid-row: 1;
    }

    div:nth-child(6) {
      grid-row: 5;
    }
  }
`;

export const Container = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  overflow: auto;
`;

const HowItWorks = () => {
  return (
    <SectionHow>
      <Container>
        <Heading classification='subheading'>How it works</Heading>
        <Heading classification='secondary'>Your daily dose of health in 3 simple steps</Heading>
      </Container>
      <ContainerGrid>
        <Step />
      </ContainerGrid>
    </SectionHow>
  );
};

export default HowItWorks;