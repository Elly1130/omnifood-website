import Link from 'next/link';
import styled from 'styled-components';

type StyledButtonProps = {
  primary?: boolean;
};

export const Btn = styled.a`
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
`;

const StyledButton = styled(Btn)`
  display: inline-block;
  background-color: #fff;
  color: #555;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  font-family: inherit;
`;

const StyledA = styled(Btn) <StyledButtonProps>`
  display: inline-block;
  background-color: ${props => props.primary ? '#e67e22' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#555'};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.3s;

  &:hover, &:active {
    background-color: ${props => props.primary ? '#cf711f' : '#fdf2e9'};
    /* border: 3px solid #fff; */
    box-shadow: ${props => props.primary ? '' : 'inset 0 0 0 3px #fff'}; // Setting inset to add box shadow inside the button
  }

  &.margin-right-sm {
    margin-right: 1.6rem !important;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  color: #e67e22;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  transition: all 0.3s;
  
  &:hover, &:active {
    color: #cf711f;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }
`;

type ButtonProps = {
  children?: React.ReactNode;
  link?: string;
  primary?: boolean;
  isLink?: boolean;
  className?: string;
};

export default function Button(props: ButtonProps) {
  if (props.link) {
    if (props.isLink) {
      return (
        <Link href={props.link}>
          <StyledLink>{props.children}</StyledLink>
        </Link >
      );
    } else {
      return (
        <Link href={props.link}>
          <StyledA primary={props.primary} className={props.className}>{props.children}</StyledA>
        </Link >
      );
    }
  }
  return <StyledButton as={'button'}>{props.children}</StyledButton>;
}