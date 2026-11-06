export default {
  path: "myCourses",

  async lazy() {
    const { MyCourse } = await import("./myCourse");
    return { Component: MyCourse };
  },
};
