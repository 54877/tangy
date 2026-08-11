import type { ReactNode } from "react";
import type { UseUserProps } from "./authType";

export interface ProfileInfoItemTitleProps {
  icon: ReactNode;
  secContext?: string;
  context: string;
  RightButton?: ReactNode;
}

export interface ProfileInfoItemProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface ProfileSafetyInfoItemProps {
  borderType?: boolean;
  icon: ReactNode;
  title: string;
  secTitle: string;
  onclick?: () => void;
}

export interface ProfileDeviceInfoItemProps {
  borderType?: boolean;
  icon: ReactNode;
  title: string;
  secTitle: string;
  onclick?: () => void;
}

export type ProfileDetailProps = Omit<UseUserProps, "id" | "role">;

export type UpdatePasswordProps = {
  oldPassword: string;
  newPassword: string;
};

export type SVProps = {
  email: string;
  code: string;
};
