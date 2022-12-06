import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  // const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign the user in
    try {
      const res = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // update state
      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);

  return { login, error, isPending };
};
