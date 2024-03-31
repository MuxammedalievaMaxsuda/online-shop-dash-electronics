import React from 'react'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
import Categories from './pages/Categories'
import Products from './pages/Products'
import CreateCategory from './pages/CreateCategory'
import CreateProduct from './pages/CreateProduct'

const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Categories/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/create-category' element={<CreateCategory/>}/>
        <Route path='/create-product' element={<CreateProduct/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App