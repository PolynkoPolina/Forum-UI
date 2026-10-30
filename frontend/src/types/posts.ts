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
    }
}