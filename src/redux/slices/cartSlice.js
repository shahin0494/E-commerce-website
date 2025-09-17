import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // add to cart - when add to cart btn clicked from view and state
        addToCart: (state, action) => {
            // find product is in state
            const existingProduct = state?.find(item => item.id == action.payload.id)
            if (existingProduct) {
                // increment quantity
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                // get remaining products other than existing
                const remainProducts = state.filter(item => item.id != existingProduct.id)
                state = [...remainProducts, existingProduct]
            }
            else {
                // ad item to cart
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }

        },
        // remove cart item
        removeCartitem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        // increment quantity
        incrementQuantity: (state, action) => {
            // find product is in state
            const existingProduct = state?.find(item => item.id === action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainProducts = state?.filter(item => item.id != action.payload)
            state = [...remainProducts, existingProduct]
        },
        // decrement quantity
         decrementQuantity: (state, action) => {
            // find product is in state
            const existingProduct = state?.find(item => item.id === action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainProducts = state?.filter(item => item.id != action.payload)
            state = [...remainProducts, existingProduct]
        },
        // empty cart
        emptyCart:(state)=>{
            return state = []
        }
    }
})

export const { addToCart, removeCartitem , incrementQuantity , decrementQuantity , emptyCart } = cartSlice.actions
export default cartSlice.reducer