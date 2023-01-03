import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: { hello: 'help' },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            console.log('registered', action.payload)
            return state
        },
        login: (state, action) => {
            console.log('logedin', action.payload)
            return state
        },
    },
})

export const { register, login } = userSlice.actions
export const selectUser = (state) => state.user

export default userSlice.reducer
