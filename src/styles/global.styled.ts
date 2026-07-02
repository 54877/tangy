import "styled-components";
import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./tokens/breakpoints";
import { colors } from "./tokens/colors";
import { radius } from "./tokens/radius";
import { semanticColors } from "./tokens/semanticColors";
import { spaces } from "./tokens/spaces";
import { typography } from "./tokens/typography";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: typeof import("./tokens/breakpoints").breakpoints;

    colors: typeof import("./tokens/colors").colors;

    semanticColors: typeof import("./tokens/semanticColors").semanticColors;

    typography: typeof import("./tokens/typography").typography;

    spaces: typeof import("./tokens/spaces").spaces;

    radius: typeof import("./tokens/radius").radius;
  }
}

export const theme = {
  breakpoints,
  colors,
  semanticColors,
  typography,
  spaces,
  radius,
};

//  *,
//  *::before,
//  *::after {
//      outline: 1px solid red;
// }
//初始化css
export const GlobalStyle = createGlobalStyle`

   /* Debug Layout */
//  *,
//  *::before,
//  *::after {
//      outline: 1px solid red;
// }
   /* Debug Layout */

   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: normal;
  }


  ul, ol {
    list-style: none;
  }


  a {
    text-decoration: none;
    color: inherit;
  }


  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
