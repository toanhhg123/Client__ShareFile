import { createSlice } from "@reduxjs/toolkit";
import AuthStore from "../../LocalStore/authStore";

const initialState = {
  isloading: false,
  islogin: false,
  error: "",
  data: {},
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
