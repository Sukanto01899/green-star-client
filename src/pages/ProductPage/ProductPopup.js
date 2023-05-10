import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axiosApi from '../../api/axiosApi';
import auth from '../../firebase.init';

const ProductPopup = ({product, setShowPopup, setConfirmPopup}) => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   

    const handlePurchase = (data)=>{
        const {address, number, quantity} = data
        if(quantity < product.minBuy){
          toast.error(`min bye ${product.minBuy}`)
          return;
        }
      
        axiosApi.post('/order', {title: product.title,userEmail: user.email,productId: product._id,quantity, price: product.price * quantity,address: address,number: number, status: 'pending'})
        .then(res => {
          if(res.data.insertedId){
            toast.success('Product added to purchase')
            setShowPopup(false)
            setConfirmPopup(true)
          }
        })
        .catch(err => console.log(err))
      }

    return (
        <div className='bg-white p-4 shadow-md'>
            <div className='flex justify-between'>
                <h1>Buy Now</h1>
                <span className='text-red-500 cursor-pointer' onClick={()=> setShowPopup(false)}>Cancel</span>
            </div>
            <h2>{product?.title}</h2>
            <form className='space-y-2' onSubmit={handleSubmit(handlePurchase)}>
            <div>
                <label htmlFor="name">Name</label>
            <input id='name' className='w-full' type="text" {...register('name')} defaultValue={user.displayName} readOnly/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
            <input id='email' className='w-full' type="email" {...register('email')} defaultValue={user.email} readOnly/>
            </div>
            <div>
                <label htmlFor="address">Address</label>
            <input id='address' className='w-full' type="text" {...register('address', {required: true})}/>
            </div>
            <div>
                <label htmlFor="number">Number</label>
            <input id='number' className='w-full' type="text" {...register('number', {required: true})}/>
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
            <input id='quantity' className='w-full' type="number" {...register('quantity')} placeholder={`Minimum buy ${product?.minBuy}`}/>
            </div>

            <input className='bg-universal w-full mt-4 text-white cursor-pointer' type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default ProductPopup;