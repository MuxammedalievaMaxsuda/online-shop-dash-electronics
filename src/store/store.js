import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../reducer/category.slice";
import productSlice from "../reducer/product.slice";

export const store=configureStore({
    reducer:{
        category: categorySlice,
        product: productSlice
    }
})