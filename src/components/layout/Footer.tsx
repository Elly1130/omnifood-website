import styled, { css } from 'styled-components';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";

import { Grid, device, Grid6Cols } from '../GlobalStyle';

const StyledFooter = styled.footer`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;
`;

const ContainerGrid = styled(Grid)`
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  @media (${device.tabletS}) {
    ${Grid6Cols}
  }
`;

const FooterLink = css`
  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;
    transition: all 0.3s;

    &:hover, &:active {
      color: #555;
    }

    .icon {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    display: block;
    margin-bottom: 3.2rem;
  }

  img {
    height: 2.2rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2.4rem;

    ${FooterLink}
  }

  p {
    font-size: 1.4rem;
    color: #767676;
    line-height: 1.6;
    margin-top: auto;
  }

  @media (${device.tabletS}) {
    grid-column: span 3;
  }
`;

const FooterNavList = styled.div`
  > p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  address {
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.6;

    p:first-child {
      margin-bottom: 2.4rem;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  ${FooterLink}
`;

const NavCol = styled(FooterNavList)`
  @media (${device.tabletS}) {
    grid-row: 1;
    grid-column: span 2;
    margin-bottom: 3.2rem;
  }
`;

const AddressCol = styled(FooterNavList)`
  @media (${device.tabletS}) {
    grid-column: span 3;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <ContainerGrid>
        <Image>
          <a href="#">
            <img src='/img/omnifood-logo.png' alt='Omnifood logo' />
          </a>
          <ul>
            <li><a href="#"><IoLogoInstagram className='icon' /></a></li>
            <li><a href="#"><IoLogoFacebook className='icon' /></a></li>
            <li><a href="#"><IoLogoTwitter className='icon' /></a></li>
          </ul>
          <p>Copyright &copy; {year} by Omnifood, Inc. All rights reserved.</p>
        </Image>
        <AddressCol>
          <p>Contact Us</p>
          <address>
            <p className='address'>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
            <p>
              <a href="tel:415-201-6370">415-201-6370</a><br />
              <a href="mailto:hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </AddressCol>
        <NavCol>
          <p>Account</p>
          <ul>
            <li><a href="#">Create account</a></li>
            <li><a href="#">Sign in</a></li>
            <li><a href="#">iOS app</a></li>
            <li><a href="#">Android app</a></li>
          </ul>
        </NavCol>
        <NavCol>
          <p>Company</p>
          <ul>
            <li><a href="#">About Omnifood</a></li>
            <li><a href="#">For Business</a></li>
            <li><a href="#">Cooking partners</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </NavCol>
        <NavCol>
          <p>Resources</p>
          <ul>
            <li><a href="#">Recipe directory</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Privacy & terms</a></li>
          </ul>
        </NavCol>
      </ContainerGrid>
    </StyledFooter>
  );
};

export default Footer;;