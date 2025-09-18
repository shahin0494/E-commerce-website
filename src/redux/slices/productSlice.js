import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
    const response = await axios.get("https://dummyjson.com/products")
    // console.log(response.data.products);
    sessionStorage.setItem("allProducts", JSON.stringify(response.data.products))
    return response.data.products



},)

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        dummyAllProducts: [],
        loading: true,
        error: ""
    },
    reducers: {
        // synchronous action funtions
        searchProducts: (state, action) => {
            state.allProducts = state.dummyAllProducts?.filter(product => product?.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true
            state.allProducts = []
            state.dummyAllProducts = []
            state.error = ""
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.error = ""
        })
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false
            state.allProducts = []
            state.dummyAllProducts = []
            state.error = "API call failed"
        })

    }
})

export const {searchProducts} = productSlice.actions
export default productSlice.reducer