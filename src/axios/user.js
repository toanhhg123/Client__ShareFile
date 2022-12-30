import { instance } from "./axios";
export const getAllUser = async () => {
  try {
    const { data } = await instance.get(`/auth/getAllUserAdmin`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
