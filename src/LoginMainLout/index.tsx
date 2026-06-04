import { LoginPage } from "../login/login";
import Register from "../Register";
import forgot from "../forgot";

export default {
  path: "/login",

  async lazy() {
    const { LoginLayout } = await import("./layout");
    return { Component: LoginLayout };
  },

  children: [
    {
      index: true,
      element: <LoginPage />,
    },
    Register,
    forgot,
  ],
};
