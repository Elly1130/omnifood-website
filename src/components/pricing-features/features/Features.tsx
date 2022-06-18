import styled from 'styled-components';
import { Grid, Grid4Cols } from '../../GlobalStyle';

const ContainerGrid = styled(Grid)`
  ${Grid4Cols}
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

const Features = () => {
  return (
    <ContainerGrid>
      <div>Feature 1</div>
      <div>Feature 2</div>
      <div>Feature 3</div>
      <div>Feature 4</div>
    </ContainerGrid>
  );
};

export default Features;