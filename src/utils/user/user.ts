import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { connectFunctionsEmulator, httpsCallable } from 'firebase/functions'

import { auth, functions } from '../firebase'
import { SignInData, SignUpData, User } from './userTypes'

//  uncomment in case of running local emulator
connectFunctionsEmulator(functions, 'localhost', 5001)

export const SignIn = async ({ email, password }: SignInData) => {
    if (email && password) {
        const UserCredintials = await signInWithEmailAndPassword(auth, email, password)
        const user: User = UserCredintials.user
        console.log(user)
    } else console.log('email or password is not found')
}
export const SignUp = async ({ email, password, name }: SignUpData) => {
    if (email && password) {
        const UserCredintials = await createUserWithEmailAndPassword(auth, email, password)
        const user: User = UserCredintials.user
        console.log(user)
        UpdateUserProfile({ displayName: name })
    } else console.log('email or password is not found')
}

const UpdateRole = ({ UserEmail, UserRole = 'user' }: { UserEmail: string; UserRole: string }) => {
    const addRole = httpsCallable(functions, 'addRole')
    addRole({ email: UserEmail, role: UserRole }).then((result) => {
        const data = result.data
        console.log(data)
    })
}

const UpdateUserProfile = (data: JsonB) => {
    if (auth?.currentUser && auth?.currentUser?.email) {
        UpdateRole({ UserEmail: auth.currentUser.email, UserRole: 'user' })
        updateProfile(auth.currentUser, {
            ...data,
        })
    }
}
