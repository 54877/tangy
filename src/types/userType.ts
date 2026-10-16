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
  imageUrl: string;
  image: File | null;
}
