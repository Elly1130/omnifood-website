import Image from 'next/image';
import styled from 'styled-components';
import NavLink from '../ui/NavLink';

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

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const Navigation = () => {
  return <Header>
    <ImageWrapper>
      <Image src='/img/omnifood-logo.png' alt='Omnifood logo' layout='fill' objectFit='contain' objectPosition='left' />
    </ImageWrapper>
    <nav>
      <NavigationList>
        <NavLink link='#'>Section&nbsp;1</NavLink>
        <NavLink link='#'>Section&nbsp;2</NavLink>
        <NavLink link='#'>Section&nbsp;3</NavLink>
        <NavLink link='#'>Section&nbsp;4</NavLink>
        <NavLink link='#' styledButton>Section&nbsp;5</NavLink>
      </NavigationList>
    </nav>
  </Header>;
};

export default Navigation;