import type { Post } from "../types/posts";

interface PostCardProps{
    post : Post
}

function PostCard({post}: PostCardProps){
    return (
        <article className="post-card">
            <p className="author-id">
                Author id: {post.authorId}
            </p>
            <h3 className="title">
                {post.title}
            </h3>
            <p className="content">
                {post.content}
            </p>
            <span className="category">
                #{post.category}
            </span>
        </article>
    )
}
export default PostCard