export default {
  path: "/index",

  //TODO等有寫登入API候補上token跳轉login
  loader: () => {
    const token = sessionStorage.getItem("GSIMS_Token");

    if (!token) {
      return null;
    }
  },

  async lazy() {
    const { Index } = await import("./indexPage");
    return { Component: Index };
  },
};
