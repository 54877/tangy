export default {
  path: "profile",

  async lazy() {
    const { Profile } = await import("./profile");
    return { Component: Profile };
  },
};
