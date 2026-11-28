import type { Profile } from "./profile";

export interface Comment {
	id: number;
    content: string;
    postId: number;
    author: Profile;
    createdAt: Date
}

export interface CommentRequest{
    content: string;
    postId: number
}

export interface CommentResponse{
    id: number;
    content: string;
    postId: number;
    author: Profile;
    createdAt: Date
}

export interface CommentDeleteRequest{
    commentId: number;
}