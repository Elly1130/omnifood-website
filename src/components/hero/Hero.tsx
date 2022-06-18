import Image from 'next/image';
import styled from 'styled-components';
import { Grid } from '../GlobalStyle';

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
`;

const HeroDescription = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;


type Props = {
  images: string[];
};

const Hero: React.FC<Props> = ({ images }) => {
  return (
    <HeroSection>
      <StyledHero>
        <div>
          <Heading classification='primary'>A healthy meal delivered to your door, every single day</Heading>
          <HeroDescription>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tasted and nutritional needs.</HeroDescription>
          <Button primary link='#' className='margin-right-sm'>Start eating well</Button>
          <Button link='#'>Learn More &darr;</Button>
          <DeliveredMeals images={images} />
        </div>
        <div>
          <Image src={'/img/hero.png'} alt={'Women enjoying food, meals in storage container, and food bowls on a table'} width='100%' height='100%' layout='responsive' objectFit='contain' />
        </div>
      </StyledHero>
    </HeroSection>
  );
};

export default Hero;
