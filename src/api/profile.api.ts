import type { CoursePayload } from "../types/createType";
import type {
  ProfileDetailProps,
  SVProps,
  UpdatePasswordProps,
} from "../types/profile";
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

  const response = await _createCourseVideo.post("/", formData);

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
  formData.append("videoKey", information.videoKey);

  // File
  if (information.image) {
    formData.append("image", information.image);
  }
  return await _createCourse.post("/", formData);
};
