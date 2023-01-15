import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { SignInData, SignUpData, UserData } from './userTypes'

export const SignIn = async ({ email, password }: SignInData) => {
    const mail = 'testmail@kitten.test'
    const pass = '123456'
    const UserCredintials = await signInWithEmailAndPassword(auth, mail, pass)
    let user: UserData = UserCredintials.user
    console.log(user)
}
export const SignUp = async ({ email, password }: SignUpData) => {
    const mail = 'testm22ail@kitten.test'
    const pass = '123456'
    const UserCredintials = await createUserWithEmailAndPassword(auth, mail, pass)
    let user: UserData = UserCredintials.user
    console.log(user)
}
