import { login } from "@/lib/api/auth/auth.api";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.payload) {
        localStorage.setItem("token", data.payload?.token);
      }
    },
    onError: (err) => {
      console.log("error", err);
    },
  });
  return { isPending, error, login: mutate };
}
