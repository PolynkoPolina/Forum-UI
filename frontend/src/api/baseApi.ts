
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../types/posts";
import type { RegisterRequest, RegisterResponse } from "../types/register";
import type { LoginRequest, LoginResponse } from "../types/login";
import type { Profile } from "../types/profile";
import type {
    Comment,
    CommentRequest,
    CommentResponse
} from "../types/comment";

export const baseAPI = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/",
        credentials: "include",
    }),
    tagTypes: ["Posts", "Comments"],

    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "/posts",
        }),

        getMe: builder.query<Profile, void>({
            query: () => "/auth/profile",
        }),

        getComments: builder.query<Comment[], number>({
            query: (postId) => `/posts/${postId}/comments`,
            providesTags: (_result, _error, postId) => [
                { type: "Comments", id: postId },
            ],
        }),

        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => ({
                url: "auth/register",
                method: "POST",
                body: data,
            }),
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
                url: "auth/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [],
        }),

        createComment: builder.mutation<CommentResponse, CommentRequest>({
            query: (data) => ({
                url: `/posts/${data.postId}/comments`,
                method: "POST",
                body: {
                    content: data.content,
                },
            }),

            invalidatesTags: (_result, _error, { postId }) => [
                { type: "Comments", id: postId },
            ],
        }),

        deleteComment: builder.mutation<void, number>({
            query: (commentId) => ({
                url: `/comments/${commentId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Posts", "Comments"],
        }),

        refresh: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: "/auth/refresh",
                method: "POST",
            }),
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetMeQuery,
    useGetCommentsQuery,
    useRegisterMutation,
    useLoginMutation,
    useCreateCommentMutation,
    useDeleteCommentMutation,
    useRefreshMutation,
} = baseAPI;
