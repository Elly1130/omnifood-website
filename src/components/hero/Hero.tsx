import styled from 'styled-components';
import { device, Grid } from '../GlobalStyle';

import Button from '../ui/Button';
import Heading from '../ui/Heading';
import DeliveredMeals from './delivered-meal/DeliveredMeals';

const HeroSection = styled.section`
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;
`;

const StyledHero = styled(Grid)`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img {
    width: 100%;

    @media (${device.tablet}) {
      width: 60%;
    }
  }

  @media (${device.laptopS}) {
    max-width: 120rem;
  }

  @media (${device.landscapeTablet}) {
    gap: 4.8rem;
  }

  @media (${device.tablet}) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const HeroBox = styled.div`
  @media (${device.tablet}) {
    text-align: center;
  }
`;


type Props = {
  images: string[];
};

const Hero: React.FC<Props> = ({ images }) => {
  return (
    <HeroSection>
      <StyledHero>
        <HeroBox>
          <Heading classification='primary'>A healthy meal delivered to your door, every single day</Heading>
          <HeroDescription>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tasted and nutritional needs.</HeroDescription>
          <Button primary link='#' className='margin-right-sm'>Start eating well</Button>
          <Button link='#'>Learn More &darr;</Button>
          <DeliveredMeals images={images} />
        </HeroBox>
        <HeroBox>
          <img src={'/img/hero.png'} alt={'Women enjoying food, meals in storage container, and food bowls on a table'} />
        </HeroBox>
      </StyledHero>
    </HeroSection>
  );
};

export default Hero;
