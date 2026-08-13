import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/global.styled";
import { FormDialogProvider } from "./dialog/dialogProvider";
import { AuthProvider } from "./auth/AuthProvider";
import { Outlet } from "react-router-dom";
import { LoadingProvider } from "./loading/loadingProvider";

export const AppProviders = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoadingProvider count={6} minDuration={0}>
        <AuthProvider>
          <FormDialogProvider>
            <Outlet />
          </FormDialogProvider>
        </AuthProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
};
