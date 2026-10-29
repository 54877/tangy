import { createTokenApi } from "./utils/createApi";

export const _getAllTags = createTokenApi("getAllTags");
export const _getAllUsers = createTokenApi("getAllUsers");
export const _getAllCourseCategories = createTokenApi("getAllCourseCategories");

export const _createTag = createTokenApi("createTag");
export const _deleteTag = createTokenApi("deleteTag");
export const _editTag = createTokenApi("editTag");

export const _editUserRole = createTokenApi("editUserRole");

export const _createCourseCategory = createTokenApi("createCourseCategory");
export const _editCourseCategory = createTokenApi("editCourseCategory");
export const _deleteCourseCategory = createTokenApi("deleteCourseCategory");

//tags 列表
export const getAllTags = async () => {
  return await _getAllTags.get("/");
};

//user 列表
export const getAllUsers = async () => {
  return await _getAllUsers.get("/");
};

//課程分類列表
export const getAllCourseCategories = async () => {
  return await _getAllCourseCategories.get("/");
};

//建立標籤
export const createTag = async (label: string) => {
  return await _createTag.post("/", {
    label,
  });
};

//刪除標籤
export const deleteTag = async (key: string) => {
  return await _deleteTag.delete("/", {
    data: { key },
  });
};

//編輯標籤
export const editTag = async (key: string, label: string) => {
  return await _editTag.put("/", {
    key,
    label,
  });
};

//修改權限
export const editUserRole = async (id: string) => {
  return await _editUserRole.post("/", {
    id,
  });
};

//建立課程分類
export const createCourseCategory = async (categoryName: string) => {
  return await _createCourseCategory.post("/", {
    CategoryName: categoryName,
  });
};

//編輯課程分類
export const editCourseCategory = async (
  categoryKey: string,
  categoryName: string,
) => {
  return await _editCourseCategory.put("/", {
    categoryKey,
    CategoryName: categoryName,
  });
};

//刪除課程分類
export const deleteCourseCategory = async (categoryKey: string) => {
  return await _deleteCourseCategory.delete("/", {
    data: { categoryKey },
  });
};
