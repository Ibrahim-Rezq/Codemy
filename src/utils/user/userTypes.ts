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
