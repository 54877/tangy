import { useState } from "react";
import { useLoading } from "../../context/loading/useLoading";
import { me } from "../nav.api";
import { useUser } from "../../context/user/useUser";

export const useMe = () => {
  const { setUser, user } = useUser();
  const { loading } = useLoading();
  const [state, setState] = useState<boolean>(false);

  const fetchMe = async () => {
    const res = await me();
    const data = res.data.dataSet;
    setUser(data);
  };

  const getMe = async (type = false) => {
    if (!user?.id) {
      loading(0).start();
      setState(true);
      try {
        await fetchMe();
      } catch (err) {
        console.log(err);
      } finally {
        setState(false);
        loading(0).stop();
      }
      return;
    }

    if (type && !state) {
      setState(true);
      try {
        await fetchMe();
      } catch (err) {
        console.log(err);
      } finally {
        setState(false);
      }
    }
  };

  return { getMe };
};
