import styled from 'styled-components';

import { TestimonialProps } from './Testimonials';

const Figure = styled.figure`
  img {
    width: 6.4rem;
    border-radius: 50%;
    margin-bottom: 1.2rem;
  }

  blockquote {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 1.6rem;
    color: #6f6f6f;
  }
`;

const Testimonial: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <Figure>
      <img src={data.img} alt={data.alt} />
      <blockquote>{data.text}</blockquote>
      <p>&mdash; {data.name}</p>
    </Figure>
  );
};

export default Testimonial;