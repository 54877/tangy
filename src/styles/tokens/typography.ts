import { css } from "styled-components";

export const NotoSansTC = "'Noto Sans TC', sans-serif";
export const JfOpenHuninn = "'jf-openhuninn-2.0', sans-serif";
export const typography = {
  heading: {
    xxxl: css`
      font-family: ${NotoSansTC};
      font-size: 40px;
      font-weight: 700;
      line-height: 120%;
    `,
    xxl: css`
      font-family: ${NotoSansTC};
      font-size: 36px;
      font-weight: 700;
      line-height: 120%;
    `,
    xl: css`
      font-family: ${NotoSansTC};
      font-size: 32px;
      font-weight: 700;
      line-height: 120%;
    `,
    lg: css`
      font-family: ${NotoSansTC};
      font-size: 28px;
      font-weight: 700;
      line-height: 120%;
    `,
    md: css`
      font-family: ${NotoSansTC};
      font-size: 24px;
      font-weight: 700;
      line-height: 120%;
    `,
    sm: css`
      font-family: ${NotoSansTC};
      font-size: 20px;
      font-weight: 700;
      line-height: 120%;
    `,
    xs: css`
      font-family: ${NotoSansTC};
      font-size: 18px;
      font-weight: 600;
      line-height: 120%;
    `,
  },

  label: {
    lg: css`
      font-family: ${NotoSansTC};
      font-size: 18px;
      font-weight: 600;
      line-height: 120%;
    `,
    md: css`
      font-family: ${NotoSansTC};
      font-size: 16px;
      font-weight: 600;
      line-height: 120%;
    `,
    sm: css`
      font-family: ${NotoSansTC};
      font-size: 14px;
      font-weight: 600;
      line-height: 120%;
    `,
    xs: css`
      font-family: ${NotoSansTC};
      font-size: 12px;
      font-weight: 600;
      line-height: 120%;
    `,
  },

  paragraph: {
    lg: css`
      font-family: ${NotoSansTC};
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
    `,
    md: css`
      font-family: ${NotoSansTC};
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    `,
    sm: css`
      font-family: ${NotoSansTC};
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
    `,
    xs: css`
      font-family: ${NotoSansTC};
      font-size: 12px;
      font-weight: 400;
      line-height: 150%;
    `,
  },
};
