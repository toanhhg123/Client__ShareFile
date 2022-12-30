import axios from "axios";
import AuthStore from "../LocalStore/authStore";
import { BASE_URL } from "./URL";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (request) => {
    const auth = AuthStore.getItem();
    console.log(auth);
    if (auth) {
      request.headers.Authorization = `Bearer ${auth.accessToken}`;
    }
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export { instance };
