import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const postReducer = postSlice.reducer;
export const {} = postSlice.actions;
