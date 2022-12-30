import { instance } from "./axios";
export const getAllSchool = async () => {
  try {
    const { data } = await instance.get(`/school`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
