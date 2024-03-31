import axios from "axios";
import { fetchedCategories, fetchedErrorCategories, fetchingCategory } from "../reducer/category.slice";
import { fetchedErrorProducts, fetchedProducts, fetchingProducts } from "../reducer/product.slice";

export async  function getCategories(url,dispatch){
    dispatch(fetchingCategory())
    await axios.get(url)
    .then(res=>{
        dispatch(fetchedCategories(res.data))
    })
    .catch(err=>{
        dispatch(fetchedErrorCategories())
        console.log(err)
    })
}

export async function getProducts(url,dispatch){
    dispatch(fetchingProducts())
    await axios.get(url)
    .then(res=>{
        dispatch(fetchedProducts(res.data))
    })
    .catch(err=>{
        dispatch(fetchedErrorProducts())
        console.log(err)
    })
}