import { User } from 'firebase/auth'

export type SignInData = {
    email: string
    password: string
}
export type SignUpData = {
    email: string
    password: string
}
export interface UserData extends User {
    // global
    role?: 'admin' | 'user' | 'instructor'
    // user
    courses?: { id: string }[]
    // instructor
    description?: string
    coursesCount?: 1
    ratingStars?: 4.5
    rating?: 1902
}
