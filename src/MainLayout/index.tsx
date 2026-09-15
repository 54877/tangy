import course from "../course";
import createCourse from "../createCourse";
import { Index } from "../index/indexPage";
import profile from "../profile";

export default {
  path: "/",

  async lazy() {
    const { MainLayout } = await import("./MainLayout");
    return { Component: MainLayout };
  },

  children: [
    {
      index: true,
      element: <Index />,
    },
    course,
    createCourse,
    profile,
  ],
};
