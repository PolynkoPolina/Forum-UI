export interface RegisterResponse{
    id: number
    email: string
}

export interface RegisterRequest{
    email: string
    password: string
}