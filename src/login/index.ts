export default {
  path: "/login",

  async lazy() {
    const { LoginPage } = await import("./login");
    return { Component: LoginPage };
  },
};
