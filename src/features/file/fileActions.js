import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFile } from "../../axios/file";
import {
  faildRequest,
  requesSuccess,
  resetState,
  sendRequest,
} from "./fileSlice";

export const getAllFileRedux = createAsyncThunk(
  "file/getAllFileRedux",
  async (params, { dispatch }) => {
    try {
      dispatch(sendRequest());
      const response = await getAllFile(params);
      dispatch(resetState());
      dispatch(requesSuccess(response));
    } catch (error) {
      dispatch(faildRequest(error.message));
    }
  }
);
