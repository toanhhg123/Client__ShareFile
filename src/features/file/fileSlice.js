import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  error: "",
  data: {
    files: [],
    totalItem: 0,
    pageIndex: 0,
    pageSize: 0,
    pages: 0,
  },
};

export const fileSlice = createSlice({
  name: "file",
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
    },
    resetState: (state) => {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { sendRequest, faildRequest, requesSuccess, resetState } =
  fileSlice.actions;

export default fileSlice.reducer;
