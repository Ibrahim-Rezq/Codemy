import { createSlice } from '@reduxjs/toolkit'

import { createRandomUser } from '../../../utils/fakerData'
import { SignUp } from '../../../utils/user/user'
import { User } from '../../../utils/user/userTypes'

type userStateType = {
    user: User
}
const initialState: userStateType = {
    user: createRandomUser(),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            const newUser = action.payload
            SignUp(newUser)
            console.log('registered', SignUp(newUser))
            return newUser
        },
        login: (state, action) => {
            console.log('logedin', action.payload)
            return state
        },
    },
})

export const { register, login } = userSlice.actions
export const selectUser = (state: { user: userStateType }) => state.user

export default userSlice.reducer
