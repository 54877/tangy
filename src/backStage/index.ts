import backStageCourse from "./backStageCourse";
import userList from "./userList";
import tags from "./tags";

export default {
  path: "backStage",

  async lazy() {
    const { BackStage } = await import("./backStage");
    return { Component: BackStage };
  },

  children: [tags, backStageCourse, userList],
};
