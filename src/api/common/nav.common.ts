import { useAuth } from "../../context/auth/useAuth";
import { useLoading } from "../../context/loading/useLoading";
import { me } from "../nav.api";

export const useMe = () => {
  const { setUser, user } = useAuth();
  const { loading } = useLoading();
  const getMe = async () => {
    if (!user?.id) {
      loading(0).start();
      try {
        const res = await me();
        const data = res.data.dataSet;
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        loading(0).stop();
      }
    }
  };

  return { getMe };
};
