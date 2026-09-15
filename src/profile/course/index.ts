export default {
  path: "createCourse",

  async lazy() {
    const { CreateCourse } = await import("./createCourse");
    return { Component: CreateCourse };
  },
};
