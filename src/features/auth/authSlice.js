import { createSlice } from "@reduxjs/toolkit";
import AuthStore from "../../LocalStore/authStore";

const auth = AuthStore.getItem();

const initialState = {
  isloading: false,
  islogin: auth && auth.accessToken ? true : false,
  error: "",
  data: auth,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sendRequest: (state) => {
      state.isloading = true;
    },
    faildRequest: (state, action) => {
      state.error = action.payload;
    },
    requesSuccess: (state, action) => {
      state.data = action.payload;
      state.islogin = true;
      AuthStore.setItem(state.data);
      console.log("...save local");
    },
    resetState: (state) => {
      AuthStore.removeStore();
      return { ...initialState };
    },
  },
});

export const { sendRequest, faildRequest, requesSuccess, resetState } =
  authSlice.actions;

export default authSlice.reducer;
