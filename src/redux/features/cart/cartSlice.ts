import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            console.log('Item', action.payload)
        },
        removeItemFromCart: (state, action) => {
            console.log('Item Id', action.payload)
        },
    },
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export const selectCart = (state) => state.cart

export default cartSlice.reducer
