import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types/posts";
import type { RegisterRequest, RegisterResponse } from "../types/register";

export const baseAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3001/'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "/posts"
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query:(data)=>({
                url: "auth/register",
                method: "POST",
                body: data
            })
        })
    })
});

export const { useGetPostsQuery, useRegisterMutation } = baseAPI;