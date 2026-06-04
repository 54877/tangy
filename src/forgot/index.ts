export default {
  path: "forgot",

  async lazy() {
    const { ForgotPassword } = await import("./forgot");
    return { Component: ForgotPassword };
  },
};
