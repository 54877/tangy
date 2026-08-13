import { useAuth } from "../../context/auth/useAuth";
import { useLoading } from "../../context/loading/useLoading";
import { me } from "../nav";

export const useMe = () => {
  const { setUser, user } = useAuth();
  const { loading } = useLoading();
  const getMe = async () => {
    if (!user?.id) {
      loading(0).start();
      try {
        const res = await me();

        setUser(res.data.userDate);
      } catch (err) {
        console.log(err);
      } finally {
        loading(0).stop();
      }
    }
  };

  return { getMe };
};
