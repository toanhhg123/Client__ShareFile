import { configureStore } from "@reduxjs/toolkit";
import file from "../features/file/fileSlice";
import auth from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    file,
    auth,
  },
});
