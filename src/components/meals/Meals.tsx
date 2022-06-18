import styled, { css } from 'styled-components';

import { getMealData, MealType } from '../../data/Meal';
import { Grid, Grid3Cols } from '../GlobalStyle';
import { Container } from '../how-it-works/HowItWorks';
import Heading from '../ui/Heading';
import DietList from './diet/DietList';
import Meal from './meal/Meal';
import Button from '../ui/Button';

const MealsSection = styled.section`
  padding: 9.6rem 0;
`;

const MarginBottomMd = css`
  margin-bottom: 4.8rem !important;
`;

const ContainerGrid = styled(Grid)`
  ${Grid3Cols}
  ${MarginBottomMd}
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

const CenterContainer = styled(Container)`
  text-align: center;
`;

const AllRecipes = styled(Container)`
  text-align: center;
  font-size: 1.8rem;
`;

export type MealDataProps = {
  meal: MealType;
};

const Meals = () => {
  const mealData = getMealData();

  return <MealsSection>
    <CenterContainer>
      <Heading classification='subheading'>Meals</Heading>
      <Heading classification='secondary'>Omnifood AI chooses from 5,000+ recipes</Heading>
    </CenterContainer>
    <ContainerGrid>
      {mealData.map(meal => <Meal key={meal.title} meal={meal} />)}
      <DietList />
    </ContainerGrid>
    <AllRecipes>
      <Button link='#' isLink>See all recipes &rarr;</Button>
    </AllRecipes>
  </MealsSection>;
};

export default Meals;