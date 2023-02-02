import { createSlice } from '@reduxjs/toolkit'

import { User } from '../../../utils/user/userTypes'

type userStateType = {
    user: User
}
const initialState: userStateType = {
    user: {} as User,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            return state
        },
        login: (state, action) => {
            console.log('logedin', action.payload)
            return state
        },
        setUser: (state, action) => {
            state.user = { ...action.payload.user, displayName: action.payload.name, photoURL: action.payload.photo }
            return state
        },
    },
})

export const { register, login, setUser } = userSlice.actions
export const selectUser = (state: { user: userStateType }) => state.user

export default userSlice.reducer
