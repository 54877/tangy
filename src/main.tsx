import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loginRoute from "./LoginMainLout/index.tsx";
import mainRoute from "./MainLayout/index.tsx";
import { AppProviders } from "./context/provider.tsx";

const router = createBrowserRouter(
  [
    {
      element: <AppProviders />,
      children: [mainRoute, loginRoute],
    },
  ],
  {
    basename: "/tangy/",
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
