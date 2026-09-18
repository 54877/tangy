export default {
  path: "order",

  async lazy() {
    const { Order } = await import("./order");
    return { Component: Order };
  },
};
