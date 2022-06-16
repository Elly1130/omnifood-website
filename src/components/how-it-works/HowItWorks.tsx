import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 9.6rem;
`;

const Grid2Cols = css`
  grid-template-columns: repeat(2, 1fr);
`;

const SectionHow = styled.section`
  padding: 9.6rem 0;
  background-color: rebeccapurple;
`;

const HowContainer = styled(Grid)`
  ${Grid2Cols}
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

const HowItWorks = () => {
  return <SectionHow>
    <HowContainer>
      <div>Test 1</div>
      <div>Test 2</div>
      <div>Test 3</div>
      <div>Test 4</div>
    </HowContainer>
  </SectionHow>;
};

export default HowItWorks;