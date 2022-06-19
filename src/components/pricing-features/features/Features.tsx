import styled from 'styled-components';


import { FeatureType, getFeatureData } from '../../../data/Features';
import { Grid, Grid4Cols, device, Grid2Cols } from '../../GlobalStyle';
import Feature from './Feature';

const ContainerGrid = styled(Grid)`
  ${Grid4Cols}
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  @media (${device.tabletS}) {
    ${Grid2Cols}
  }
`;

export type FeatureProps = {
  data: FeatureType;
};

const Features = () => {
  const featureData = getFeatureData();

  return (
    <ContainerGrid>
      {featureData.map(data => <Feature key={data.title} data={data} />)}
    </ContainerGrid>
  );
};

export default Features;