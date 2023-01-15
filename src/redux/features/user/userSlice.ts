import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: { name: 'name => Coming from redux' },
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
export const selectUser = (state: { user: any }) => state.user

export default userSlice.reducer
