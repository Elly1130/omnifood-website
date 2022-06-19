import styled from 'styled-components';
import { device } from '../GlobalStyle';
import NavLink from '../ui/NavLink';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdf2e9;
  height: 9.6rem;
  padding: 0 4.8rem;

  @media (${device.landscapeTablet}) {
    padding: 0 3.2rem;
  }
`;

const ImageWrapper = styled.a`
  img {
    height: 2.2rem;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  @media (${device.landscapeTablet}) {
    gap: 3.2rem;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <ImageWrapper href='#'>
        <img src='/img/omnifood-logo.png' alt='Omnifood logo' />
      </ImageWrapper>
      <nav>
        <NavigationList>
          <NavLink link='#'>How it works</NavLink>
          <NavLink link='#'>Meals</NavLink>
          <NavLink link='#'>Testimonials</NavLink>
          <NavLink link='#'>Pricing</NavLink>
          <NavLink link='#' styledButton>Try for free</NavLink>
        </NavigationList>
      </nav>
    </Header>
  );
};

export default Navigation;