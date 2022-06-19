import styled, { createGlobalStyle, css } from 'styled-components';

const size = {
  laptopM: '84em',
  landscapeTablet: '75em',
  tablet: '59em',
  tabletS: '44em',
};

export const device = {
  laptopS: `max-width: ${size.laptopM}`,
  landscapeTablet: `max-width: ${size.landscapeTablet}`,
  tablet: `max-width: ${size.tablet}`,
  tabletS: `max-width: ${size.tabletS}`,
};

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(230, 125, 34, 0.5);
  }
}

html {
  /* font-size: 10px; */
  font-size: 62.5%;
  height: 100%;
  overflow-x: hidden;

  @media (${device.landscapeTablet}) {
    font-size: 56.25%;
  }

  @media (${device.tablet}) {
    font-size: 50%;
  }
}

body {
  font-family: 'Rubik', 'Inter', sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
  height: 100%;
  overflow-x: hidden;
}
`;

export default GlobalStyle;

export const OrangeHighlight = styled.span`
  color: #cf711f;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  margin-bottom: 9.6rem;

  :last-child {
    margin-bottom: 0;
  }

  @media (${device.landscapeTablet}) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  /* :not(:last-child) {
    margin-bottom: 9.6rem;
  } */
`;

export const Grid2Cols = css`
  grid-template-columns: repeat(2, 1fr);
`;

export const Grid3Cols = css`
  grid-template-columns: repeat(3, 1fr);
`;

export const Grid4Cols = css`
  grid-template-columns: repeat(4, 1fr);
`;

export const Grid5Cols = css`
  grid-template-columns: repeat(5, 1fr);
`;

export const Grid6Cols = css`
  grid-template-columns: repeat(6, 1fr);
`;

export const GridCenterV = css`
  align-items: center;
`;

/*
--- 01 TYPOGRAPHY SYSTEM

- Font Sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weight
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line height
Default: 1
Small: 1.06
Medium: 1.2
Paragraph default: 1.6
Large: 1.8


- Letter spacing
-0.5px
0.75px
1.2px

--- 02 COLORS

- Primary: #e67e22
- Tints:
#fdf2e9
#fae5d3
#eb984e
- Shades:
#cf711f
#45260a
- Accents:
- Greys
#333
#555
#6f6f6f (lightest grey allowed on #fdf2e9)
#767676 (lightest grey allowed on #fff)
#888
#aaa

--- 05 SHADOWS
box-shadow: 0 2.4rem 4.8rem rgba(0,0,0,0.075);

--- 06 BORDER-RADIUS

Default: 9px

--- 07 WHITESPACE

- Spacing (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 60 / 80 / 96 / 128
*/
