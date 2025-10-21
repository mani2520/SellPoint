import api from "@/lib/axios";

interface LoginPayload {
  email: string;
  password: string;
}

export const adminLogin = async (data: LoginPayload) => {
  const response = await api.post("/admin/login", data);
  console.log("Login response:", response.data);
  return response.data;
};
