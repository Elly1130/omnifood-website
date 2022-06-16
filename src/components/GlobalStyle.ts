import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* font-size: 10px; */
  font-size: 62.5%;
}

body {
  font-family: 'Rubik', 'Inter', sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #555;
}
`;

export default GlobalStyle;

export const OrangeHighlight = styled.span`
  color: #cf711f;
  font-weight: 700;
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

--- 02 COLORS

- Primary: #e67e22
- Tints:
#fdf2e9
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
