import { createSlice } from "@reduxjs/toolkit"

const initialState={
    products: [],
    isLoading: false
}

const ProductSlice=createSlice({
    name: 'product',
    initialState,
    reducers:{
        fetchingProducts(state){
            state.isLoading=true
        },
        fetchedProducts(state,action){
            state.isLoading=false
            state.products=action.payload
        },
        fetchedErrorProducts(state){
            state.isLoading=false
        }
    }
})

export const {fetchingProducts, fetchedProducts, fetchedErrorProducts}=ProductSlice.actions
export default ProductSlice.reducer