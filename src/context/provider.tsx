import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/global.styled";
import { FormDialogProvider } from "./dialog/dialogProvider";
import { AuthProvider } from "./auth/AuthProvider";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormDialogProvider>
        <AuthProvider>{children}</AuthProvider>
      </FormDialogProvider>
    </ThemeProvider>
  );
};
