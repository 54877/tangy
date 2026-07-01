export interface UserProps {
  email: string;
  password: string;
  userName: string;
}

export interface ForgotProps {
  email: string;
  code: string;
  newPassword: string;
}
