export interface UserProps {
  email: string;
  password: string;
  userName: string;
  code: string;
}

export interface ForgotProps {
  email: string;
  code: string;
  newPassword: string;
}

export interface UseUserProps {
  id: string;
  birthday: string;
  introduction: string;
  gender: string;
  createdAt: string;
  svType: boolean;
  email: string;
  userName: string;
  role: "user" | "admin";
}
