import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData } from "./types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (build) => ({
    getPost: build.query<IData[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetPostQuery } = postApi;
