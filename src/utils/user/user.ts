import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { httpsCallable } from 'firebase/functions'

import { auth, functions } from '../firebase'
import { SignInData, SignUpData, User } from './userTypes'

export const SignIn = async ({ email, password }: SignInData): Promise<User | unknown> => {
    try {
        if (email && password) {
            const UserCredintials = await signInWithEmailAndPassword(auth, email, password)
            const user: User = UserCredintials.user
            return user
        } else return 'email or password is not found'
    } catch (e) {
        return e
    }
}

export const SignUp = async ({ email, password, name, role = 'user' }: SignUpData): Promise<User | unknown> => {
    try {
        if (email && password) {
            const UserCredintials = await createUserWithEmailAndPassword(auth, email, password)
            const user: User = UserCredintials.user
            UpdateUserProfile({ displayName: name }, role)
            return user
        } else return 'email or password is not found'
    } catch (e) {
        return e
    }
}

const UpdateRole = ({ UserEmail, UserRole }: { UserEmail: string; UserRole: User['role'] }) => {
    const addRole = httpsCallable(functions, 'addRole')
    addRole({ email: UserEmail, role: UserRole }).catch((e) => console.log('could not set role', e))
}

const UpdateUserProfile = (data: JsonB, role?: User['role']) => {
    if (auth?.currentUser && auth?.currentUser?.email) {
        UpdateRole({ UserEmail: auth.currentUser.email, UserRole: role })
        updateProfile(auth.currentUser, {
            ...data,
        })
    }
}
