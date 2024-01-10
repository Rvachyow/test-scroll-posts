import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../../entities/posts/slice";
import { postApi } from "./postApi";

export const store = configureStore({
  reducer: {
    post: postReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
