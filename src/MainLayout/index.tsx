import { Index } from "../index/indexPage";

export default {
  path: "/",

  //TODO等有寫登入API候補上token跳轉login
  loader: () => {
    const token = sessionStorage.getItem("GSIMS_Token");

    if (!token) {
      return null;
    }
  },

  async lazy() {
    const { MainLayout } = await import("./MainLayout");
    return { Component: MainLayout };
  },

  children: [
    {
      index: true,
      element: <Index />,
    },
  ],
};
