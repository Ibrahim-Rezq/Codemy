import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import courseReducer from './features/course/courseSlice'
import userReducer from './features/user/userSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        course: courseReducer,
    },
})
