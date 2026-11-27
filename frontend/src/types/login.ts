export interface LoginResponse{
    id: number
    email: string
}

export interface LoginRequest{
    email: string
    password: string
}