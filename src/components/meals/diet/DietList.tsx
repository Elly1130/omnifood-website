import styled from 'styled-components';
import Heading from '../../ui/Heading';
import DietItem from './DietItem';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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
    <div>
      <Heading classification='tertiary'>Works with any diet: </Heading>
      <List>
        {Diet.map(diet => <DietItem diet={diet} />)}
      </List>
    </div>
  );
};

export default DietList;