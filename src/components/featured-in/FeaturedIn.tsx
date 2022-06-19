import styled from 'styled-components';
import { device } from '../GlobalStyle';

import { Container } from '../how-it-works/HowItWorks';
import Heading from '../ui/Heading';

const SectionFeatured = styled.section`
  padding: 4.8rem 0 3.2rem 0;
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;

    @media (${device.tablet}) {
      height: 2.4rem;
    }
  }
`;

const FeaturedIn = () => {
  return <SectionFeatured>
    <Container>
      <Heading classification='featured'>As featured in</Heading>
      <Logos>
        <img src="/img/logos/techcrunch.png" alt="Techcrunch logo" />
        <img src="/img/logos/business-insider.png" alt="Business Insider logo" />
        <img src="/img/logos/the-new-york-times.png" alt="The New York Times logo" />
        <img src="/img/logos/forbes.png" alt="Forbes logo" />
        <img src="/img/logos/usa-today.png" alt="USA Today logo" />
      </Logos>
    </Container>
  </SectionFeatured>;
};

export default FeaturedIn;