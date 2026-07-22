import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import loginRoute from "./LoginMainLout/index.tsx";
import mainRoute from "./MainLayout/index.tsx";
import profileRoute from "./profile/index.ts";
import { GlobalStyle, theme } from "./styles/global.styled.ts";

const router = createBrowserRouter([mainRoute, loginRoute, profileRoute], {
  basename: "/tangy/",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
