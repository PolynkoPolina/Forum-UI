import { useForm } from "react-hook-form";
import { useDeleteCommentMutation, useGetMeQuery } from "../api/baseApi";
import type { Profile } from "../types/profile";

interface CommentsProps {
    id: number
    content: string;
    author: Profile;
    createdAt: Date;
}

function Comment({ id, content, createdAt, author }: CommentsProps) {
    const { handleSubmit } = useForm();
    const [deleteComment] = useDeleteCommentMutation();
    const { data: profileData, isLoading } = useGetMeQuery();

    async function onSubmit() {
        try {
            await deleteComment(id).unwrap();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="comment">
            <div className="comment-info">
                <div className="comment-head">
                    <span>{author.email}</span>
                    <span>{new Date(createdAt).toLocaleString("uk-UA")}</span>
                </div>
                <p>{content}</p>
            </div>

            {!isLoading && profileData?.email === author.email && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button type="submit">Delete</button>
                </form>
            )}
        </div>
    );
}
export default Comment