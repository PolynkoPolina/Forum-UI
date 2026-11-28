import type { Profile } from "./profile"
import type { CommentResponse } from "./comment"

export interface Post{
    id: number
    title: string
    content: string
    category:{
        id: number
        name: string
    }
    author: {
        id:number
        email: string
    },
    comments:[{
        id: number;
        content: string;
        postId: number;
        author: Profile;
        createdAt: Date
        comments: CommentResponse[]
    }]
}