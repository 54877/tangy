export default {
  path: "register",

  async lazy() {
    const { Register } = await import("./register");
    return { Component: Register };
  },
};
