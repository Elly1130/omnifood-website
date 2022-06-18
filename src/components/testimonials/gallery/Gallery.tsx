import styled from 'styled-components';

import { GalleryProps } from '../Testimonials';

const Figure = styled.figure`
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <Figure>
      <img src={data.img} alt="Photo of beautifully arranged food" />
    </Figure>
  );
};

export default Gallery;