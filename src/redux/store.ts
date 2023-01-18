import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import userReducer from './features/user/userSlice'
import courseReducer from './features/course/courseSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        course:courseReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch