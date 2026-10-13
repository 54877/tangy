export default {
  path: "backStageCourse",

  async lazy() {
    const { BackStageCourse } = await import("./backStageCourse");
    return { Component: BackStageCourse };
  },
};
