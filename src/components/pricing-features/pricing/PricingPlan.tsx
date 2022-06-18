import styled from 'styled-components';

import { List } from '../../meals/diet/DietList';
import Button from '../../ui/Button';
import { PricingPlanProps } from './Pricing';
import PricingItem from './PricingItem';

const PricingPlanDiv = styled.div`
  border-radius: 11px;
  width: 75%;

  &.starter {
    justify-self: end;
    border: 2px solid #fdf2e9;
    padding: 4.6rem;
  }

  &.complete {
    background-color: #fdf2e9;
    padding: 4.8rem;
    position: relative;
    overflow: hidden;

    ::after{
      content: 'Best Value';
      position: absolute;
      top: 6%;
      right: -18%;
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      color: #333;
      background-color: #ffd43b;
      padding: 0.8rem 8rem;
      transform: rotate(45deg);
    }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4.8rem;
`;

const Name = styled.p`
  color: #cf711f;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.75;
  margin-bottom: 3.2rem;
`;

const Price = styled.p`
  font-size: 6.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.6rem;

  span {
    font-size: 3rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #6f6f6f;
`;

const Signup = styled.div`
  text-align: center;
  margin-top: 4.8rem;
`;

const PricingPlan: React.FC<PricingPlanProps> = ({ data }) => {
  return (
    <PricingPlanDiv className={data.name}>
      <Header>
        <Name>{data.name}</Name>
        <Price>
          <span>$</span>
          {data.price}
        </Price>
        <Text>{data.text}</Text>
      </Header>
      <List>
        {data.specifications.map(data => <PricingItem key={data} specification={data} />)}
      </List>
      <Signup>
        <Button primary link='#'>Start eating well</Button>
      </Signup>
    </PricingPlanDiv>
  );
};

export default PricingPlan;