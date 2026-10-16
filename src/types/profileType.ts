import type { UseUserProps } from "./userType";

export type ProfileDetailProps = Omit<UseUserProps, "id" | "role">;

export type UpdatePasswordProps = {
  oldPassword: string;
  newPassword: string;
};

export type SVProps = {
  email: string;
  code: string;
};

export interface DeviceProps {
  id: string;
  lastUseAt: string;
  ip: string;
  userId: string;
  userAgent: string;
  deviceType: string | null;
  deviceVendor: string | null;
  deviceModel: string | null;
  os: string;
  osVersion: string;
  browser: string;
  browserVersion: string;
  createdAt: string;
  isCurrent: boolean;
}
