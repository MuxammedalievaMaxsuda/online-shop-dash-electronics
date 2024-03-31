import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios';
import { getProducts } from '../getData/getDataAxios';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDelete = ({ open, handleOpen, itemId, setChange }) => {

    const dispatch = useDispatch()

    function deleteProduct() {
        handleOpen()
        axios.delete(`https://dbonlineshop2.onrender.com/products/${itemId}`)
            .then(res => {
                toast.success("Product deleted!", {
                    position: 'top-right',
                });
            })
            .catch(err => {
                toast.error("Error delete!", {
                    position: 'top-right',
                });
            })
        setChange(true)
        getProducts('https://dbonlineshop2.onrender.com/products', dispatch)
    }
    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button>
            <Dialog open={open} handler={handleOpen} className='p-3 mx-auto my-10 bg-white rounded-md flex flex-col gap-3 w-[300px] h-max border-[1px] border-red-500 text-center'>
                <DialogHeader>Are you sure this product delete?</DialogHeader>
                <DialogFooter className='flex gap-2 items-center'>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="px-3 py-1 rounded-md"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="outlined" className='px-5 py-1 rounded-md bg-red-500 text-[500] border-none text-white' onClick={() => deleteProduct()}>
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
        </>
    )
}

export default ProductDelete