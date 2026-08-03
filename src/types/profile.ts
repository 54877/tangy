import type { ReactNode } from "react";

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

export interface ProfileDetailProps {
  name: string;
  email: string;
  birthday: string;
  createdAt: string;
  gender: string;
  introduction: string;
}
