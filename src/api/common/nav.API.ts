import { useAuth } from "../../context/auth/useAuth";
import { me } from "../nav";

export const useMe = () => {
  const { setUser, user } = useAuth();

  const getMe = async () => {
    if (!user?.id) {
      try {
        const res = await me();

        setUser(res.data.userDate);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { getMe };
};
