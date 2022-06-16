import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 1.05;
  color: #333;
  letter-spacing: -0.5px; // Remove spacing between letters
  margin-bottom: 3.2rem;
`;

type HeadingProps = {
  classification: string;
  children?: React.ReactNode;
};

export default function Heading(props: HeadingProps) {
  return <StyledHeading>{props.children}</StyledHeading>;
}