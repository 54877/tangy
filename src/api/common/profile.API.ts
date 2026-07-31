import { useAuth } from "../../context/auth/useAuth";
import { me } from "../profile";

export const useMe = () => {
  const { setUser } = useAuth();

  const getMe = async () => {
    try {
      const res = await me();
      setUser(res.data.userDate);
    } catch (err) {
      console.log(err);
    }
  };

  return { getMe };
};
