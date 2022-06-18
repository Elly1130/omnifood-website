import { GetStaticProps } from 'next';
import Head from 'next/head';
import FeaturedIn from '../components/featured-in/FeaturedIn';

import Hero from '../components/hero/Hero';
import HowItWorks from '../components/how-it-works/HowItWorks';
import Meals from '../components/meals/Meals';

type Props = {
  images: string[];
};

const Home: React.FC<Props> = ({ images }) => {
  return <>
    <Head>
      <title>Omnifood</title>
    </Head>
    <Hero images={images}></Hero>
    <FeaturedIn />
    <HowItWorks />
    <Meals />
  </>;
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