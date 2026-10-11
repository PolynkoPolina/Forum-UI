import type { Post } from "../types/posts"
import PostCard from "./PostCard"

interface PostListProps{
    posts: Post[]
}

function PostList({posts}: PostListProps){
    return (
        <section className="posts-list">
            {posts.map((post)=>(
                <PostCard key = {post.id} post = {post}></PostCard>
            ))}
        </section>
    )
}

export default PostList
