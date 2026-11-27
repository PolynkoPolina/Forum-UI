import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types/posts";
import type { RegisterRequest, RegisterResponse } from "../types/register";
import type { LoginRequest, LoginResponse } from "../types/login";
import type { Profile } from "../types/profile";

export const baseAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/',
        credentials: "include"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "/posts"
        }),
        getMe: builder.query<Profile, void>({
            query: () => "/auth/profile"
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query:(data)=>({
                url: "auth/register",
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation<LoginResponse, LoginRequest>({
            query:(data)=>({
                url: "auth/login",
                method: "POST",
                body: data
            })
        }),
    })
});

export const { useGetPostsQuery, useRegisterMutation, useLoginMutation, useGetMeQuery} = baseAPI;