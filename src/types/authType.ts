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
