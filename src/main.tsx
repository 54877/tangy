import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle, theme } from "./styles/global.styled.ts";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import mainRoute from "./MainLayout/index.tsx";
import loginRoute from "./login/index.ts";
const router = createBrowserRouter([mainRoute, loginRoute], {
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
