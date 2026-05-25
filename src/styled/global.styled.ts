import "styled-components";
import { createGlobalStyle, css } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    widths: {
      lg: string;
      md: string;
      sm: string;
    };

    colors: {
      primary: Record<number, string>;
      secondary: Record<number, string>;
      gray: Record<number, string>;
      success: Record<number, string>;
      danger: Record<number, string>;
      warning: Record<number, string>;
      info: Record<number, string>;

      background: {
        base: string;
        surface: string;
        elevated: string;
      };

      border: {
        light: string;
        base: string;
        dark: string;
      };

      text: {
        primary: string;
        secondary: string;
        dark: string;
        light: string;
        muted: string;
        warning: string;
        danger: string;
        success: string;
        info: string;
        white: string;
      };
    };

    typography: {
      heading: {
        xxxl: TypographyStyle;
        xxl: TypographyStyle;
        xl: TypographyStyle;
        lg: TypographyStyle;
        md: TypographyStyle;
        sm: TypographyStyle;
        xs: TypographyStyle;
      };

      label: {
        lg: TypographyStyle;
        md: TypographyStyle;
        sm: TypographyStyle;
        xs: TypographyStyle;
      };

      paragraph: {
        lg: TypographyStyle;
        md: TypographyStyle;
        sm: TypographyStyle;
        xs: TypographyStyle;
      };
    };

    spacing: {
      lg: string;
      md: string;
      sm: string;
    };

    borderRadius: {
      lg: string;
      md: string;
      sm: string;
    };
  }

  interface TypographyStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
  }
}

// =======================
// FONT
// =======================

const NotoSansTC = "'Noto Sans TC', sans-serif";

// =======================
// COLOR PALETTES
// =======================

const primary = {
  50: "#ecffff",
  100: "#cffbfe",
  200: "#a6f5fb",
  300: "#68ebf8",
  400: "#23d8ed",
  500: "#07bbd3",
  600: "#0aa2c0",
  700: "#0f778f",
  800: "#166174",
  900: "#175062",
  950: "#083544",
};

const secondary = {
  50: "#ffffea",
  100: "#fffbc5",
  200: "#fff885",
  300: "#ffee46",
  400: "#ffdf1b",
  500: "#ffc107",
  600: "#e29400",
  700: "#bb6902",
  800: "#985108",
  900: "#7c420b",
  950: "#482200",
};

const gray = {
  50: "#f4f5f7",
  100: "#e4e8e9",
  200: "#ccd1d5",
  300: "#a8b1b8",
  400: "#7d8a93",
  500: "#626f78",
  600: "#545e66",
  700: "#495057",
  800: "#40454a",
  900: "#383b41",
  950: "#232529",
};

const success = {
  50: "#f1fcf2",
  100: "#dff9e4",
  200: "#c1f1cb",
  300: "#90e5a3",
  400: "#58d073",
  500: "#32b550",
  600: "#28a745",
  700: "#1f7634",
  800: "#1e5d2d",
  900: "#1a4d27",
  950: "#092a12",
};

const danger = {
  50: "#fef2f2",
  100: "#fee6e5",
  200: "#fccfcf",
  300: "#f9a8a8",
  400: "#f57779",
  500: "#ec474f",
  600: "#dc3545",
  700: "#b7192c",
  800: "#99182c",
  900: "#83182c",
  950: "#490812",
};

const warning = {
  50: "#fff8ed",
  100: "#ffefd4",
  200: "#ffdba9",
  300: "#ffc072",
  400: "#fe9b39",
  500: "#fd7e14",
  600: "#ee6108",
  700: "#c54909",
  800: "#9c3910",
  900: "#7e3110",
  950: "#441606",
};

const info = {
  50: "#eef8ff",
  100: "#d8eeff",
  200: "#b9e0ff",
  300: "#89cfff",
  400: "#52b4ff",
  500: "#2a91ff",
  600: "#0d6efd",
  700: "#0c5ae9",
  800: "#1149bc",
  900: "#144194",
  950: "#11295a",
};

// =======================
// TYPOGRAPHY
// =======================

const typography = {
  heading: {
    xxxl: {
      fontFamily: NotoSansTC,
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    xxl: {
      fontFamily: NotoSansTC,
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    xl: {
      fontFamily: NotoSansTC,
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    lg: {
      fontFamily: NotoSansTC,
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    md: {
      fontFamily: NotoSansTC,
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    sm: {
      fontFamily: NotoSansTC,
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    xs: {
      fontFamily: NotoSansTC,
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "120%",
    },
  },

  label: {
    lg: {
      fontFamily: NotoSansTC,
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "120%",
    },
    md: {
      fontFamily: NotoSansTC,
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "120%",
    },
    sm: {
      fontFamily: NotoSansTC,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "120%",
    },
    xs: {
      fontFamily: NotoSansTC,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "120%",
    },
  },

  paragraph: {
    lg: {
      fontFamily: NotoSansTC,
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    md: {
      fontFamily: NotoSansTC,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    sm: {
      fontFamily: NotoSansTC,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    xs: {
      fontFamily: NotoSansTC,
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "150%",
    },
  },
};

// =======================
// THEME
// =======================

export const theme = {
  widths: {
    lg: "1200px",
    md: "992px",
    sm: "768px",
  },

  colors: {
    primary,
    secondary,
    gray,
    success,
    danger,
    warning,
    info,

    background: {
      base: "#ffffff",
      surface: gray[50],
      elevated: "#ffffff",
    },

    border: {
      light: gray[100],
      base: gray[200],
      dark: gray[400],
    },

    text: {
      primary: gray[950],
      secondary: gray[600],
      dark: gray[950],
      light: gray[700],
      muted: gray[500],

      warning: warning[600],
      danger: danger[600],
      success: success[600],
      info: info[600],

      white: "#ffffff",
    },
  },

  typography,

  spacing: {
    lg: "24px",
    md: "16px",
    sm: "8px",
  },

  borderRadius: {
    lg: "20px",
    md: "16px",
    sm: "4px",
  },
};

export const textStyles = {
  headingXxxl: css`
    font-family: ${NotoSansTC};
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
  `,

  headingXxl: css`
    font-family: ${NotoSansTC};
    font-size: 36px;
    font-weight: 700;
    line-height: 120%;
  `,

  headingXl: css`
    font-family: ${NotoSansTC};
    font-size: 32px;
    font-weight: 700;
    line-height: 120%;
  `,

  headingLg: css`
    font-family: ${NotoSansTC};
    font-size: 28px;
    font-weight: 700;
    line-height: 120%;
  `,

  headingMd: css`
    font-family: ${NotoSansTC};
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
  `,

  headingSm: css`
    font-family: ${NotoSansTC};
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
  `,

  headingXs: css`
    font-family: ${NotoSansTC};
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
  `,

  labelLg: css`
    font-family: ${NotoSansTC};
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
  `,

  labelMd: css`
    font-family: ${NotoSansTC};
    font-size: 16px;
    font-weight: 600;
    line-height: 120%;
  `,

  labelSm: css`
    font-family: ${NotoSansTC};
    font-size: 14px;
    font-weight: 600;
    line-height: 120%;
  `,

  labelXs: css`
    font-family: ${NotoSansTC};
    font-size: 12px;
    font-weight: 600;
    line-height: 120%;
  `,

  paragraphLg: css`
    font-family: ${NotoSansTC};
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
  `,

  paragraphMd: css`
    font-family: ${NotoSansTC};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  `,

  paragraphSm: css`
    font-family: ${NotoSansTC};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  `,

  paragraphXs: css`
    font-family: ${NotoSansTC};
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
  `,
};

//初始化css
export const GlobalStyle = createGlobalStyle`
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
