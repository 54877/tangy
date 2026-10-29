export default {
  path: "category",

  async lazy() {
    const { Category } = await import("./category");
    return { Component: Category };
  },
};
