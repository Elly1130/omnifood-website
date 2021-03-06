import { GetStaticProps } from 'next';
import Head from 'next/head';
import CallToAction from '../components/cta/CallToAction';
import FeaturedIn from '../components/featured-in/FeaturedIn';

import Hero from '../components/hero/Hero';
import HowItWorks from '../components/how-it-works/HowItWorks';
import Meals from '../components/meals/Meals';
import PricingFeatures from '../components/pricing-features/PricingFeatures';
import Testimonials from '../components/testimonials/Testimonials';

type Props = {
  images: string[];
};

const Home: React.FC<Props> = ({ images }) => {
  return (
    <>
      <Head>
        <title>Omnifood</title>
      </Head>
      <Hero images={images}></Hero>
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <PricingFeatures />
      <CallToAction />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let images: string[] = [];

  for (let i = 1; i < 7; i++) {
    const imagePath: string = `/img/customers/customer-${i}.jpg`;
    images.push(imagePath);
  }

  return {
    props: {
      images: images
    }
  };
};

export default Home;