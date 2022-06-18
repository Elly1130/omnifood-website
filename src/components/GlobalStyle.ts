import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* font-size: 10px; */
  font-size: 62.5%;
  height: 100%;
}

body {
  font-family: 'Rubik', 'Inter', sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
  height: 100%;
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
`;

export const Grid2Cols = css`
  grid-template-columns: repeat(2, 1fr);
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
Paragraph default: 1.6

- Letter spacing
-0.5px
0.75px
1.2px

--- 02 COLORS

- Primary: #e67e22
- Tints:
#fdf2e9
#fae5d3
- Shades:
#cf711f
- Accents:
- Greys
#333
#555

--- 05 SHADOWS

--- 06 BORDER-RADIUS

Default: 9px

--- 07 WHITESPACE

- Spacing (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 60 / 80 / 96 / 128
*/
