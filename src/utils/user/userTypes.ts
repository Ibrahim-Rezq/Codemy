import { User as FirebaseUser } from 'firebase/auth'

export type SignInData = {
    email: string
    password: string
}
export type SignUpData = {
    name: string
    email: string
    password: string
}
export interface User extends FirebaseUser {
    //////////////////// important data from User ////////////////////
    // uid
    // accessToken
    // displayName
    // photoURL
    // email
    // emailVerified
    // phoneNumber // if using a phone sign in
    // isAnonymous
    // metadata
    //////////////////////////////////////////////////////////////////
    role?: 'admin' | 'user' | 'instructor'
}
export interface UserData {
    // user
    courses?: { id: string }[]
    // instructor
    description?: string
    coursesCount?: 1
    ratingStars?: 4.5
    rating?: 1902
}
