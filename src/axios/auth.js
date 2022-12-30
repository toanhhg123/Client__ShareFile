import { instance } from "./axios";
export const login = async (user) => {
  try {
    const { data } = await instance.post(`/auth/login`, user);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
