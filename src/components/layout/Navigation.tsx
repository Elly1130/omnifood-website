import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
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

  @media (${device.tablet}) {
    flex-direction: column;
    gap: 4.8rem;
  }
`;

const MobileNav = styled.button<StyledButtonProps>`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  z-index: 1;

  .icon {
    height: 4.8rem;
    width: 4.8rem;
    color: #333;
  }

  svg:first-child {
    display: ${props => props.show ? 'none' : 'block'};
  }

  svg:last-child {
    display: ${props => props.show ? 'block' : 'none'};
  }

  @media (${device.tablet}) {
    display: block;
  } 
`;

const MainNav = styled.nav<StyledButtonProps>`
  @media (${device.tablet}) {
    background-color: rgba(255, 255, 255, 0.97);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s ease-in;
    // 1) Hide it visually
    opacity: ${props => props.show ? '1' : '0'};
    // 2) Make it unaccessible to mouse and keyboard
    pointer-events: ${props => props.show ? 'auto' : 'none'};
    // 3) Hide it from screen readers
    visibility: ${props => props.show ? 'visible' : 'hidden'};
  } 
`;

type StyledButtonProps = {
  show: boolean;
};

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      <ImageWrapper href='#'>
        <img src='/img/omnifood-logo.png' alt='Omnifood logo' />
      </ImageWrapper>
      <MainNav show={showMenu}>
        <NavigationList>
          <NavLink link='#'>How it works</NavLink>
          <NavLink link='#'>Meals</NavLink>
          <NavLink link='#'>Testimonials</NavLink>
          <NavLink link='#'>Pricing</NavLink>
          <NavLink link='#' styledButton>Try for free</NavLink>
        </NavigationList>
      </MainNav>
      <MobileNav show={showMenu}>
        <IoMenuOutline className='icon' onClick={() => { setShowMenu(true); }} />
        <IoCloseOutline className='icon' onClick={() => { setShowMenu(false); }} />
      </MobileNav>
    </Header>
  );
};

export default Navigation;