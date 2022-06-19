import styled from 'styled-components';
import { device } from '../../GlobalStyle';

const Image = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  margin-right: -1.6rem;
  border: 3px solid #fdf2e9;
`;

type ImageProps = {
  image: string;
};

const DeliveredImages: React.FC<ImageProps> = ({ image }) => {
  return <Image src={image} alt='Customer Photo' />;
};

export default DeliveredImages;