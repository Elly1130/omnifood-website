import Link from 'next/link';
import styled from 'styled-components';

type StyledButtonProps = {
  primary?: boolean;
};

export const Btn = styled.a`
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
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

type ButtonProps = {
  children?: React.ReactNode;
  link?: string;
  primary?: boolean;
  className?: string;
};

export default function Button(props: ButtonProps) {
  if (props.link) {
    return <Link href={props.link}>
      <StyledA primary={props.primary} className={props.className}>{props.children}</StyledA>
    </Link >;
  }
  return <button>{props.children}</button>;
}