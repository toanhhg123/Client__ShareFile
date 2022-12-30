import { instance } from "./axios";
export const getSpecializeds = async () => {
  try {
    const { data } = await instance.get("/specialized");
    return data;
  } catch (error) {
    return error.message;
  }
};
