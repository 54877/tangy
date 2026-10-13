export default {
  path: "userList",

  async lazy() {
    const { UserList } = await import("./userList");
    return { Component: UserList };
  },
};
