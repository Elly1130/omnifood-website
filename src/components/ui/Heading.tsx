import styled, { css } from 'styled-components';
import { device } from '../GlobalStyle';

const StyledHeading = css`
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px; // Remove spacing between letters
`;

const StyledH1 = styled.h1`
  ${StyledHeading}
  font-size: 5.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;

  @media (${device.laptopS}) {
    font-size: 4.4rem;
  }
`;

const StyledH2 = styled.h2`
  ${StyledHeading}
  font-size: 4.4rem;
  line-height: 1.2;
  margin-bottom: 9.6rem;

  @media (${device.landscapeTablet}) {
    font-size: 3.6rem;
  }
`;

const StyledH3 = styled.h3`
  ${StyledHeading}
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 3.2rem;

  @media (${device.landscapeTablet}) {
    font-size: 2.4rem;
  }
`;

const StyledSubheading = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;

const StyledFeatured = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2.4rem;
  color: #888;
`;

type HeadingProps = {
  classification: string;
  children?: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = (props) => {
  if (props.classification === 'primary') {
    return <StyledH1>{props.children}</StyledH1>;
  } else if (props.classification === 'subheading') {
    return <StyledSubheading>{props.children}</StyledSubheading>;
  } else if (props.classification === 'secondary') {
    return <StyledH2>{props.children}</StyledH2>;
  } else if (props.classification === 'featured') {
    return <StyledFeatured>{props.children}</StyledFeatured>;
  } else {
    return <StyledH3>{props.children}</StyledH3>;
  }
};

export default Heading;