import styled from 'styled-components';
import { device } from '../../GlobalStyle';
import Heading from '../../ui/Heading';
import DietItem from './DietItem';

const DietDiv = styled.div`
  @media (${device.tabletS}) {
    grid-column: 1 / -1;
    justify-self: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  line-height: 1.2;
`;

const DietList = () => {
  const Diet = [
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Gluten-free',
    'Lactose-free',
    'Keto',
    'Paleo',
    'Low FODMAP',
    'Kid-friendly'
  ];

  return (
    <DietDiv>
      <Heading classification='tertiary'>Works with any diet: </Heading>
      <List>
        {Diet.map(diet => <DietItem key={diet} diet={diet} />)}
      </List>
    </DietDiv>
  );
};

export default DietList;