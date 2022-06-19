import styled from 'styled-components';

import { Grid } from '../GlobalStyle';
import { Container } from '../how-it-works/HowItWorks';
import Heading from '../ui/Heading';
import CTAForm from './CTAForm';

const CTA = styled.section`
  padding: 9.6rem 0;
`;

const ContainerGrid = styled(Grid)`
  grid-template-columns: 2fr 1fr;
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  box-shadow: 0 2.4rem 4.8rem rgba(0,0,0,0.15);
  border-radius: 11px;
  overflow: hidden;
`;

const Text = styled.div`
  padding: 6.4rem;
  padding-top: 4.8rem;
  color: #45260a;

  h2  {
    color: inherit;
    margin-bottom: 3.2rem;
  }
  
  p {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 4.8rem;
  }
`;

const Image = styled.div`
  background-image: linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('/img/eating.jpg');
  background-size: cover;
  background-position: center;
`;

const CallToAction = () => {
  return (
    <CTA>
      <Container>
        <ContainerGrid>
          <Text>
            <Heading classification='secondary'>Get your first meal for free!</Heading>
            <p>Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
            <CTAForm />
          </Text>
          <Image role={'img'} aria-label={'Woman enjoying food'}></Image>
        </ContainerGrid>
      </Container>
    </CTA>
  );
};

export default CallToAction;