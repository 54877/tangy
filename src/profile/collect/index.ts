export default {
  path: "collect",

  async lazy() {
    const { Collect } = await import("./collect");
    return { Component: Collect };
  },
};
