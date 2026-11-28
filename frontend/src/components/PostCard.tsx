import type { Post } from "../types/posts";
import Comment from './Comment'
import { useForm } from "react-hook-form"
import { useCreateCommentMutation, useGetMeQuery } from "../api/baseApi";

interface PostCardProps {
    post: Post
}

interface CommentFormData {
    content: string
    postId: number
}

function PostCard({ post }: PostCardProps) {
    const [createComment] = useCreateCommentMutation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CommentFormData>()
    const { data: profileData, isLoading } = useGetMeQuery();

    async function onSubmit(data: CommentFormData) {
        await createComment({
            content: data.content,
            postId: post.id
        }).unwrap();
        reset()
    }
    return (
        <article className="post-card">
            <p className="author-id">
                Author: {post.author.email}
            </p>
            <h3 className="title">
                {post.title}
            </h3>
            <p className="content">
                {post.content}
            </p>
            <span className="category">
                #{post.category.name}
            </span>
            { !isLoading && profileData && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="comment"
                        id=""
                        {...register("content", {
                            required: "Wrire a comment"
                        })} />
                    {errors.content && <p>{errors.content.message}</p>}
                    <button type="submit">Post</button>
                </form>
            )}
            <section>
                {post.comments.map((comment) => (
                    <Comment key={comment.id} id={comment.id} content={comment.content} createdAt={comment.createdAt} author={comment.author}></Comment>
                    )
                )}
            </section>
        </article>
    )
}
export default PostCard