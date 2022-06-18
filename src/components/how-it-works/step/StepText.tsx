import styled from 'styled-components';

import Heading from '../../ui/Heading';
import { StepDataProps } from './Step';

const StepNumber = styled.p`
  font-size: 8.6rem;
  font-weight: 600;
  color: #ddd;
  margin-bottom: 1.2rem;
`;

const StepDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
`;

const StepText: React.FC<StepDataProps> = ({ data }) => {
  return <div>
    <StepNumber>{data.id}</StepNumber>
    <Heading classification='tertiary'>{data.title}</Heading>
    <StepDescription>{data.description}</StepDescription>
  </div>;
};

export default StepText;