import Link from 'next/link';
import styled, { css } from 'styled-components';
import { device } from '../GlobalStyle';
import { Btn } from './Button';

const Styled = css`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;

  &:hover, &:active {
    cursor: pointer;
  }

  @media (${device.tablet}) {
    font-size: 3rem;
  }
`;

const StyledA = styled.a`
  ${Styled}

  &:hover, &:active {
    color: #cf711f;
  }
`;

const StyledAButton = styled(Btn)`
  ${Styled}
  padding: 1.2rem 2.4rem;
  color: #fff;
  background-color: #e67e22;

  &:hover, &:active {
    background-color: #cf711f;
  }
`;

type NavLinkProp = {
  styledButton?: boolean;
  link: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProp> = ({ link, children, styledButton }) => {
  if (styledButton) {
    return <li>
      <Link href={link}>
        <StyledAButton>{children}</StyledAButton>
      </Link>
    </li>;
  }

  return <li>
    <Link href={link}>
      <StyledA>{children}</StyledA>
    </Link>
  </li>;
};

export default NavLink;