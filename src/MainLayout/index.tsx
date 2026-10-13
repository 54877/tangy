import course from "../course";
import backStage from "../backStage";
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
    profile,
    backStage,
  ],
};
