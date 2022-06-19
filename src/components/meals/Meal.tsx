import { IoFlameOutline, IoRestaurantOutline, IoStarOutline } from "react-icons/io5";
import styled from 'styled-components';
import { device } from '../GlobalStyle';

import { MealDataProps } from './Meals';

const StyledMeal = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0,0,0,0.075);
  border-radius: 1.1rem;
  overflow: hidden;
  transition: all 0.4s;
  
  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0,0,0,0.06);
  }
`;

const MealContent = styled.div`
  padding: 4.8rem;
  padding-top: 3.2rem;

  @media (${device.tablet}) {
    padding: 3.2rem;
    padding-top: 2.4rem;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p`
  font-size: 2.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 3.2rem;
`;

const Attributes = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    .meal-icon {
      width: 2.4rem;
      height: 2.4rem;
      color: #e67e22;
    }
  }
`;

const Strong = styled.strong`
  font-weight: 500;
`;

const Category = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  gap: 0.4rem;

  span {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #333;
    border-radius: 100px;
    font-weight: 600;
  }

  .vegetarian{
    background-color: #51cf66;
  }

  .vegan{
    background-color: #94d32d;
  }

  .paleo{
    background-color: #ffd43b;
  }
`;

const Meal: React.FC<MealDataProps> = ({ meal }) => {
  return (
    <StyledMeal>
      <Image src={meal.img} alt={meal.title} />
      <MealContent>
        <Category>
          {meal.category.map(category => <span key={category} className={category}>{category}</span>)}
        </Category>
        <Title>{meal.title}</Title>
        <Attributes>
          <li>
            <IoFlameOutline className='meal-icon' />
            <span><Strong>{meal.calories}</Strong> calories</span>
          </li>
          <li>
            <IoRestaurantOutline className='meal-icon' />
            <span>NutriScore &reg; <Strong>{meal.nutriScore}</Strong></span>
          </li>
          <li>
            <IoStarOutline className='meal-icon' />
            <span><Strong>{meal.averageRating}</Strong> rating ({meal.NumberReview})</span>
          </li>
        </Attributes>
      </MealContent>
    </StyledMeal>
  );
};

export default Meal;