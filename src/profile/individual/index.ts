export default {
  path: "personal",

  async lazy() {
    const { Personal } = await import("./personal");
    return { Component: Personal };
  },
};
