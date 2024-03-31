import React, { useEffect, useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCategories } from '../getData/getDataAxios';



const CategoryUpdate = ({ setChange, open, handleOpen, itemId }) => {

    const { categories } = useSelector(state => state.category)
    const dispatch=useDispatch()
    useEffect(() => {
        setTitle(categories.find(item => item.id == itemId)?.title)
    }, [itemId])
    const [title, setTitle] = useState('')


    function UpdateCategory(id) {
        const data = { title }
        handleOpen()
        setChange(true)
         axios.patch(`https://dbonlineshop2.onrender.com/categories/${id}`, data)
        getCategories('https://dbonlineshop2.onrender.com/categories', dispatch)
    }

    return (
        <>
            <Button onClick={handleOpen}>Message Dialog</Button>
            <Dialog open={open} size="xs" handler={handleOpen} className='w-[300px] h-max p-3 bg-white border-[1px] border-blue-500 rounded-md mx-auto my-10'>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        {" "}
                        <Typography className="mb-1 text-[16px] text-gray-800 font-[500]" variant="h4">
                            Category Update
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody>
                    <div className="my-3">
                        <input type="text" placeholder='category name' value={title} onChange={(e) =>setTitle(e.target.value)} className='w-full py-1 px-3 rounded-sm outline-none border text-gray-800 ' />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2 flex items-center gap-3">
                    <Button variant="text" color="gray" className='rounded-md px-3 py-1' onClick={handleOpen}>
                        cancel
                    </Button>
                    <Button variant="gradient" className='bg-blue-500 text-white fonr-[500] px-3 py-1 rounded-md' onClick={()=>UpdateCategory(itemId)}>
                        Update
                    </Button>
                </DialogFooter>
            </Dialog>
            
        </>
    )
}

export default CategoryUpdate