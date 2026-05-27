import { colors } from "./colors";

export const semanticColors = {
  background: {
    base: "#ffffff",
    surface: colors.gray[50],
    elevated: "#ffffff",
  },

  border: {
    light: colors.gray[100],
    base: colors.gray[200],
    dark: colors.gray[400],
  },

  text: {
    primary: colors.gray[950],
    secondary: colors.gray[600],
    muted: colors.gray[500],

    warning: colors.warning[600],
    danger: colors.danger[600],
    success: colors.success[600],
    info: colors.info[600],

    white: "#ffffff",
  },
};
