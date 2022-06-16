import Image from 'next/image';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdf2e9;
  height: 9.6rem;
  padding: 0 4.8rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 2.2rem;
  position: relative;
  /* display: flex; */
`;

const Navigation = () => {
  return <Header>
    <ImageWrapper>
      <Image src='/img/omnifood-logo.png' alt='Omnifood logo' layout='fill' objectFit='contain' objectPosition='left' />
    </ImageWrapper>
    <nav>Navigation</nav>
  </Header>;
};

export default Navigation;