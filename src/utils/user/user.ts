import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { httpsCallable, connectFunctionsEmulator } from 'firebase/functions'
import { auth, functions } from '../firebase'
import { SignInData, SignUpData, UserData } from './userTypes'

//  uncomment in case of running local emulator
connectFunctionsEmulator(functions, 'localhost', 5001)

export const SignIn = async ({ email, password }: SignInData) => {
    if (email && password) {
        const UserCredintials = await signInWithEmailAndPassword(auth, email, password)
        let user: UserData = UserCredintials.user
        console.log(user)
    } else console.log('email or password is not found')
}
export const SignUp = async ({ email, password }: SignUpData) => {
    if (email && password) {
        const UserCredintials = await createUserWithEmailAndPassword(auth, email, password)
        let user: UserData = UserCredintials.user
        console.log(user)
        if (user.email) UpdateRole({ UserEmail: user.email, UserRole: 'user' })
    } else console.log('email or password is not found')
}

const UpdateRole = ({ UserEmail, UserRole = 'user' }: { UserEmail: string; UserRole: string }) => {
    const addRole = httpsCallable(functions, 'addRole')
    addRole({ email: UserEmail, role: UserRole }).then((result) => {
        const data = result.data
        console.log(data)
    })
}
