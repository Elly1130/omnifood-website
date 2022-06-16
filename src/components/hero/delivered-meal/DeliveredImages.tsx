import Image from 'next/image';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  margin-left: -1.6rem;
  position: relative;
  border-radius: 50%;
  border: 3px solid #fdf2e9;
`;

type ImageProps = {
  image: string;
};

const DeliveredImages: React.FC<ImageProps> = ({ image }) => {
  return <ImageWrapper>
    <Image src={image} alt='Customer Photo' layout='fill' />
  </ImageWrapper>;
};

export default DeliveredImages;