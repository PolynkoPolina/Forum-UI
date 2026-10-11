import type { Post } from "../types/posts";

let posts: Post[] = [
    {
        id: 0,
        title: "Cat",
        content: "Look at my cat!",
        category: "cats",
        authorId: 1
    }, 
    {
        id: 1,
        title: "Dog",
        content: "Look at my dog!",
        category: "dogs",
        authorId: 2
    }, 
    {
        id: 2,
        title: "Bunny",
        content: "Look at my bunny!",
        category: "bunny",
        authorId: 3
    }, 
    {
        id: 3,
        title: "Parrot",
        content: "Look at my parrot!",
        category: "parrots",
        authorId: 4
    }, 
    {
        id: 4,
        title: "Snake",
        content: "Look at my snake!",
        category: "snakes",
        authorId: 5
    }, 
]

export default posts