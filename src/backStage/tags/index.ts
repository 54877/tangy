export default {
  path: "tags",

  async lazy() {
    const { Tags } = await import("./tags");
    return { Component: Tags };
  },
};
