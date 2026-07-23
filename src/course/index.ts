export default {
  path: "course",

  async lazy() {
    const { Course } = await import("./course");
    return { Component: Course };
  },
};
