export default {
  path: "learn",

  async lazy() {
    const { Learn } = await import("./learn");
    return { Component: Learn };
  },
};
