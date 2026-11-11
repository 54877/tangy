import type { CoursePayload, CourseVideoResponse } from "../types/createCourseType";
import type {
  ProfileDetailProps,
  SVProps,
  UpdatePasswordProps,
} from "../types/profileType";
import { createTokenApi } from "./utils/createApi";

const _personal = createTokenApi("personal");
const _updatePassword = createTokenApi("updatePassword");
const _updatePersonal = createTokenApi("updatePersonal");
const _SvSendEmail = createTokenApi("SvSendEmail");
const _2FA = createTokenApi("2FA");
const _2FAClose = createTokenApi("2FAClose");
const _DeviceCloseById = createTokenApi("DeviceCloseById");
const _DeviceCloseByUserId = createTokenApi("DeviceCloseByUserId");
const _createCourseVideo = createTokenApi("createCourseVideo");
const _createCourse = createTokenApi("createCourse");
const _updateUserImage = createTokenApi("updateUserImage");
const _getCourseFormOptions = createTokenApi("getCourseFormOptions");
const _myCourse = createTokenApi("myCourse");
const _getMyCourseById = createTokenApi("getMyCourseById");
const _reReviewCourse = createTokenApi("reReviewCourse");

export const getMyCourseById = async (id: string) => {
  return await _getMyCourseById.post("/", {
    id,
  });
};

export const myCourse = async () => {
  return await _myCourse.get("/");
};

export const personal = async () => {
  return await _personal.get("/");
};

export const updatePassword = async (information: UpdatePasswordProps) => {
  return await _updatePassword.put("/", {
    oldPassword: information.oldPassword,
    newPassword: information.newPassword,
  });
};

export const updatePersonal = async (information: ProfileDetailProps) => {
  return await _updatePersonal.put("/", {
    userName: information.userName,
    gender: information.gender,
    introduction: information.introduction,
    birthday: information.birthday,
  });
};

export const SvSendEmail = async (email: string) => {
  return await _SvSendEmail.post("/", {
    email: email,
  });
};

export const FA = async (information: SVProps) => {
  return await _2FA.post("/", {
    email: information.email,
    code: information.code,
  });
};

export const FAClose = async () => {
  return await _2FAClose.post("/");
};

export const DeviceCloseById = async (id: string) => {
  return await _DeviceCloseById.post("/", {
    id: id,
  });
};

export const DeviceCloseByUserId = async (userId: string) => {
  return await _DeviceCloseByUserId.post("/", {
    userId: userId,
  });
};

export const createCourseVideo = async (information: CoursePayload) => {
  const formData = new FormData();

  if (information.video) {
    formData.append("video", information.video);
  }

  const response = await _createCourseVideo.post<{ dataSet: CourseVideoResponse }>("/", formData);
  return response;
};

export const createCourse = async (information: CoursePayload) => {
  const formData = new FormData();
  formData.append("title", information.title);
  formData.append("teacher", information.teacher);
  formData.append("price", information.price);
  formData.append("originalPrice", information.originalPrice);
  formData.append("content", information.content);
  formData.append("duration", information.duration);
  formData.append("categoryKey", information.categoryKey);
  formData.append("videoKey", information.videoKey);
  formData.append("videoTicket", information.videoTicket);
  formData.append("tagsKey", JSON.stringify(information.tagsKey));

  // File
  if (information.image) {
    formData.append("image", information.image);
  }
  return await _createCourse.post("/", formData);
};

export const reReviewCourse = async (information: CoursePayload & { id: string }) => {
  const formData = new FormData();
  formData.append("id", information.id);
  formData.append("title", information.title);
  formData.append("teacher", information.teacher);
  formData.append("price", information.price);
  formData.append("originalPrice", information.originalPrice);
  formData.append("content", information.content);
  formData.append("categoryKey", information.categoryKey);
  formData.append("tagsKey", JSON.stringify(information.tagsKey));
  if (information.image) formData.append("image", information.image);
  if (information.videoKey && information.duration && information.videoTicket) {
    formData.append("videoKey", information.videoKey);
    formData.append("duration", information.duration);
    formData.append("videoTicket", information.videoTicket);
  }
  return await _reReviewCourse.put("/", formData);
};

export const updateUserImage = async (image: File) => {
  const formData = new FormData();
  // File
  if (image) {
    formData.append("image", image);
  }
  return await _updateUserImage.put("/", formData);
};

//課程建立表單選項（標籤、課程分類等）
export const getCourseFormOptions = async () => {
  return await _getCourseFormOptions.get("/");
};
