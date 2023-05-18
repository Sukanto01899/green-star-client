import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { HiXMark } from "react-icons/hi2";
import { PlusIcon } from '../../../../assets/icons/icons';
import auth from '../../../../firebase.init';
import './manageproduct.css';


const ProductForm = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const [product, setProduct] = useState({});
    const [features, setFeatures] = useState([]);
    const [description, setDescription] = useState('')
    const imageStorageApi = process.env.REACT_APP_imageStorageApi;

    const handleAddProduct = (data)=>{
        const {productName, model, minBuy, price, stock, brand, code, image} = data;
        const file = image[0];
        
        const url = `https://www.filestackapi.com/api/store/S3?key=${imageStorageApi}`;

        const productObj = {
            title: productName,
            description: description,
            minBuy: parseInt(minBuy),
            stock: parseInt(stock),
            price: parseInt(price),
            model: model,
            brand: brand,
            code: parseInt(code),
            features: features
        }

      const loadingToast = toast.loading('Please wait...')

       fetch(url, {
        method: 'POST',
        body: file
       })
       .then(res => res.json())
       .then(data => {
         if(data.url){
            const product = {...productObj, image: data.url}
            axios.post(`https://green-star.onrender.com/product/upload/${user.email}`, {product}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            .then(res => {
                if(res.data.acknowledged){
                    toast.success('Product successfully added', {id: loadingToast})
                }
            })
            .catch(err => toast.error(err.message, {id: loadingToast}))
         }
       })
       .catch(err => toast.error(err.message, {id: loadingToast}))
    }

    const handleFeature =()=>{
        let featureForm = document.getElementById('featureForm');
        const featureFormValue = featureForm.value;
        if(!featureFormValue){
            return;
        }
        setFeatures([...features, featureFormValue])
        featureForm.value = ''
    }
    const handleCancelFeature = (i)=>{
        const all_feature = [...features];
        all_feature.splice(i, 1)
        setFeatures(all_feature)
    }
    
    return (
        
             <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit(handleAddProduct)} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Product Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Product Name"
              type="text"
              id="name"
              {...register('productName', {required: true})}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <label className="sr-only" htmlFor="brand">Brand</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Brand"
                type="text"
                id="brand"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="model">Model</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Model"
                type="text"
                id="model"
                {...register('model', {required: true})}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="code">Code</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Code"
                type="text"
                id="code"
                {...register('code', {required: true})}
              />
            </div>
          </div>

         {/* Price, stock, minBuy */}
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              
            <label className="sr-only" htmlFor="price">Price</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Price"
                type="number"
                id="price"
                {...register('price', {required: true})}
              />

            </div>

            <div>
            <label className="sr-only" htmlFor="stock">Stock</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Stock"
                type="number"
                id="stock"
                {...register('stock', {required: true})}
              />
            </div>

            <div>
            <label className="sr-only" htmlFor="minBuy">Minimum Buy</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Minimum Buy"
                type="number"
                id="minBuy"
                {...register('minBuy', {required: true})}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Write Description"
              rows="5"
              id="message"
              onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Feature */}
            <div>
                <div aria-label="Main Nav" className="flex flex-col space-y-1 mb-3">
                {features.map((feature, i)=> <p
    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 hover:text-gray-700 flex justify-between items-center"
  >
    <span>{feature}</span>
    <HiXMark onClick={()=> handleCancelFeature(i)} className='text-red-500 text-xl'/>
  </p>)}
                </div>
                
            <div className="relative">
  <label htmlFor="featureForm" className="sr-only"> Feature </label>

  <input
    type="text"
    id="featureForm"
    placeholder="Add Feature"
    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
  />

  <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
    <div onClick={handleFeature}
      className="rounded-full bg-universal p-0.5 text-white hover:bg-green-700"
    >
      <span className="sr-only">Submit</span>
      <PlusIcon/>
    </div>
  </span>
</div>
            </div>

            {/* Image upload */}
            <div>
            <label className="sr-only" htmlFor="image">Minimum Buy</label>
              <input
                className="w-full rounded-lg border-2 border-gray-200 p-1 text-md"
                placeholder="Upload File"
                type="file"
                id="image"
                {...register('image', {required: true})}
              />
            </div>
          

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-universal px-5 py-3 font-medium text-white sm:w-auto"
            >
             Add Product
            </button>
          </div>
        </form>
      </div>
        
    );
};

export default ProductForm;