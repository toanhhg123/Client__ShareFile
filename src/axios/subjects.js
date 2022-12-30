import { instance } from "./axios";
export const getAllSubject = async () => {
  try {
    const { data } = await instance.get(`/subject`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
