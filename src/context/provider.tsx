import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/global.styled";
import { FormDialogProvider } from "./dialog/dialogProvider";
import { AuthProvider } from "./auth/AuthProvider";
import { Outlet } from "react-router-dom";
import { LoadingProvider } from "./loading/loadingProvider";
import { UserProvider } from "./user/UserProvider";
import { TagsProvider } from "./tags/TagsProvider";

export const AppProviders = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoadingProvider count={6} minDuration={0}>
        <UserProvider>
          <AuthProvider>
            <FormDialogProvider>
              <TagsProvider>
                <Outlet />
              </TagsProvider>
            </FormDialogProvider>
          </AuthProvider>
        </UserProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
};
