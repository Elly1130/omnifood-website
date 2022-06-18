import styled from 'styled-components';
import { IoInfiniteOutline, IoPauseOutline, IoLeafOutline, IoNutritionOutline } from "react-icons/io5";

import { FeatureProps } from './Features';

const FeatureDiv = styled.div`
  .feature-icon {
    color: #e67e22;
    height: 6.4rem;
    width: 6.4rem;
    background-color: #fdf2e9;
    margin-bottom: 3.2rem;
    padding: 1.6rem;
    border-radius: 50%;
  }
`;

const Title = styled.p`
  font-size: 2.4rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
`;

const Feature: React.FC<FeatureProps> = ({ data }) => {
  return (
    <FeatureDiv>
      {data.title === 'Never cook again!' && <IoInfiniteOutline className='feature-icon' />}
      {data.title === 'Local and organic' && <IoNutritionOutline className='feature-icon' />}
      {data.title === 'No waste' && <IoLeafOutline className='feature-icon' />}
      {data.title === 'Pause anytime' && <IoPauseOutline className='feature-icon' />}
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
    </FeatureDiv>
  );
};

export default Feature;