import styled from 'styled-components';
import { GalleryType, getGalleryData } from '../../data/Gallery';

import { getTestimonialData, TestimonialType } from '../../data/Testimonial';
import { Grid, Grid2Cols, Grid3Cols, device } from '../GlobalStyle';
import Heading from '../ui/Heading';
import Gallery from './Gallery';
import Testimonial from './Testimonial';

const TestimonialSection = styled(Grid)`
  grid-template-columns: 55fr 45fr;
  background-color: #fdf2e9;
  row-gap: unset;
  column-gap: unset;
  align-items: center;
  margin-bottom: 0;
`;

const TestimonialContainer = styled.div`
  padding: 9.6rem;
`;

const TestimonialDiv = styled(Grid)`
  ${Grid2Cols}
  row-gap: 4.8rem;
  column-gap: 8rem;
`;

const GalleryDiv = styled(Grid)`
  ${Grid3Cols}
  gap: 1.6rem;
  padding: 1.6rem;

  @media (${device.laptopS}) {
    ${Grid2Cols}
  }
`;

export type TestimonialProps = {
  data: TestimonialType;
};

export type GalleryProps = {
  data: GalleryType;
};

const Testimonials = () => {
  const testimonialData = getTestimonialData();
  const galleryData = getGalleryData();

  return (
    <TestimonialSection as={'section'}>
      <TestimonialContainer>
        <Heading classification='subheading'>Testimonials</Heading>
        <Heading classification='secondary'>Once you try it, you can't go back</Heading>
        <TestimonialDiv>
          {testimonialData.map(data => <Testimonial key={data.name} data={data} />)}
        </TestimonialDiv>
      </TestimonialContainer>
      <GalleryDiv>
        {galleryData.map(data => <Gallery key={data.img} data={data} />)}
      </GalleryDiv>
    </TestimonialSection>
  );
};

export default Testimonials;