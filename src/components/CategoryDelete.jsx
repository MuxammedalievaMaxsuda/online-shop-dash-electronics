import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios';
import { getCategories } from '../getData/getDataAxios';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoryDelete = ({ open, handleOpen, itemId, setChange }) => {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)

    function checkDeleteProducts() {
        products.map(item => {
            if (item.categoryId == itemId) {
                axios.delete(`https://dbonlineshop2.onrender.com/products/${item.id}`)
            }
        })
    }
    
    function deleteCategory() {
        handleOpen()
        checkDeleteProducts()
        setChange(true)
        axios.delete(`https://dbonlineshop2.onrender.com/categories/${itemId}`)
            .then(res => {
                toast.success("Category deleted!", {
                    position: 'top-right',
                });
            })
            .catch(err => {
                toast.error("Error delete!", {
                    position: 'top-right',
                });
            })
        getCategories('https://dbonlineshop2.onrender.com/categories', dispatch)
    }
    return (
        <div>
            <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button>
            <Dialog  open={open} handler={handleOpen} className='p-3 mx-auto my-10 bg-white rounded-md flex flex-col gap-3 w-[300px] h-max border-[1px] border-red-500 text-center'>
                <DialogHeader>Are you sure this category deleted?</DialogHeader>
                <DialogFooter className='flex gap-2 items-center'>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="px-3 py-1 rounded-md"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="outlined" className='px-5 py-1 rounded-md bg-red-500 text-[500] border-none text-white' onClick={() => deleteCategory()}>
                        <span>Delete</span>
                    </Button>
                </DialogFooter>
            </Dialog>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
    )
}

export default CategoryDelete