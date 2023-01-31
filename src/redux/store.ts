import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import { courseApi } from './features/course/courseApiSlice'
import courseReducer from './features/course/courseSlice'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        course: courseReducer,
        [courseApi.reducerPath]: courseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(courseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
