export default {
  path: "create-course",

  async lazy() {
    const { CreateCourse } = await import("./createCourse");
    return { Component: CreateCourse };
  },
};
