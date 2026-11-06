import collect from "./collect";
import CreateCourse from "./course";
import personal from "./individual";
import learn from "./learn";
import order from "./order";
import myCourse from "./myCourse";

export default {
  path: "profile",

  async lazy() {
    const { Profile } = await import("./profile");
    return { Component: Profile };
  },

  children: [personal, CreateCourse, learn, collect, order, myCourse],
};
