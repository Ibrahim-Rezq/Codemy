import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { httpsCallable } from 'firebase/functions'

import { auth, functions } from '../firebase'
import { SignInData, SignUpData, User } from './userTypes'
import { useDispatch } from 'react-redux'
import { register, selectUser, setUser } from '../../redux/features/user/userSlice'
import { useSelector } from 'react-redux'

type UserContextValue = {
    user?: User | null
    userLoaded: boolean
    SignIn: ({ email, password }: SignInData) => Promise<unknown>
    SignUp: ({ email, password, name, role }: SignUpData) => Promise<unknown>
}

//@ts-ignore
const UserContext = createContext<UserContextValue>()

export const UserContextProvider = (props: any): React.ReactNode => {
    const state = useSelector(selectUser)

    const dispatch = useDispatch()

    const SignIn = async ({ email, password }: SignInData): Promise<unknown> => {
        try {
            if (email && password) {
                const UserCredintials = await signInWithEmailAndPassword(auth, email, password)
                const user: User = UserCredintials.user
                dispatch(setUser(user))
            } else return 'email or password is not found'
        } catch (e) {
            return e
        }
    }

    const SignUp = async ({ email, password, name, role = 'user' }: SignUpData): Promise<unknown> => {
        try {
            if (email && password) {
                const UserCredintials = await createUserWithEmailAndPassword(auth, email, password)
                const user: User = UserCredintials.user
                UpdateUserProfile({ displayName: name }, role)
                const photo = 'https://loremflickr.com/640/360'
                dispatch(setUser({ user, name, photo }))
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

    useEffect(() => {
        console.log(state)
    }, [state])

    const value: UserContextValue = {
        user: null,
        userLoaded: false,
        SignIn,
        SignUp,
    }
    return <UserContext.Provider value={value} {...props} />
}

export const useUser = (): UserContextValue => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error(`useUser must be used within a UserContextProvider.`)
    }
    return context
}
