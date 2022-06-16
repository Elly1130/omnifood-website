import styled from 'styled-components';

import { OrangeHighlight } from '../../GlobalStyle';
import DeliveredImages from './DeliveredImages';

const StyledDeliveredMeals = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;
`;

const StyledDeliveredImage = styled.div`
  display: flex;
  margin-left: 1.6rem;

  img {
    border-radius: 50%;
  }
`;

const DeliveredText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

type Props = {
  images: string[];
};

const DeliveredMeals: React.FC<Props> = ({ images }) => {
  return <>
    <StyledDeliveredMeals>
      <StyledDeliveredImage>
        {images.map(image => <DeliveredImages image={image} />)}
      </StyledDeliveredImage>
      <DeliveredText><OrangeHighlight>250,000+</OrangeHighlight> meals delivered last year!</DeliveredText>
    </StyledDeliveredMeals>
  </>;
};

export default DeliveredMeals;