import { instance } from "./axios";
export const getAllFile = async ({ subjects, pageIndex, PageSize }) => {
  try {
    const { data } = await instance.get(`/file/getAllFilePublicServer`, {
      params: {
        subjects,
        pageIndex,
        PageSize,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const uploadFile = async ({ name, desc, subjects, file }) => {
  try {
    const body = new FormData();
    body.append("name", name);
    body.append("desc", desc);
    body.append("subjects", subjects);
    body.append("file", file);
    console.log(file);
    const { data } = await instance.post(`/file/uploadServer/`, body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
