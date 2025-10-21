import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAdminAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("adminToken")) router.push("/admin/login");
  }, []);
};
