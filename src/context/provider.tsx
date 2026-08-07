import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/global.styled";
import { FormDialogProvider } from "./dialog/dialogProvider";
import { AuthProvider } from "./auth/AuthProvider";
import { Outlet } from "react-router-dom";

export const AppProviders = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <FormDialogProvider>
          <Outlet />
        </FormDialogProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
