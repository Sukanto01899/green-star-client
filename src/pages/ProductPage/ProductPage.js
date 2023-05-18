import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import axiosApi from '../../api/axiosApi';
import { StarIconFill, StarIconHole } from '../../assets/icons/icons';
import PopupBG from '../../components/Popup/PopupBG';
import auth from '../../firebase.init';
import ConfirmPopup from './ConfirmPopup';
import Description from './Description';
import ProductPopup from './ProductPopup';
import Reviews from './Reviews';
import Specification from './Specification';

const ProductPage = () => {
  const {id} = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [orderId, setOrderId] = useState('')
  
  useEffect(()=>{
    axiosApi(`/product/${id}`)
    .then(res => setProduct(res.data))
    .then(err => toast.error(err.message))
  }, [id])
  
    return (
      <div className='bg-light-main'>

<div className='xl:w-25 mx-auto text-black px-4 py-8 sm:py-12 sm:px-6 lg:py-12'>

  <div className="0">
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div className="grid grid-cols-1">
        <img
          alt="Les Paul"
          src={product?.image}
          className="aspect-square w-full rounded-xl object-cover"
        />

        
      </div>

      <div className="sticky top-0">
        <strong
          className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
        >
          {product?.stock < 1 ? "Out of Stock" : "In Stock"}
        </strong>

        <div className="mt-8 flex justify-between">
          <div className="max-w-[35ch] space-y-2">
            <h1 className="text-xl font-bold sm:text-2xl">
              {product?.title}
            </h1>

            <fieldset>
            <div className="flex flex-wrap gap-1">
              <label htmlFor="color_tt" className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_tt"
                  className="peer sr-only"
                />

                <span
                  className="group inline-block rounded-full border border-slate-400 px-3 py-1 text-xs font-medium"
                >
                  Brand: <span className='font-semibold'>{product?.brand}</span>
                </span>
              </label>

              <label htmlFor="color_fr" className="cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  id="color_fr"
                  className="peer sr-only"
                />

                <span
                  className="group inline-block rounded-full border border-slate-400 px-3 py-1 text-xs font-medium "
                >
                  Product Code: <span className='font-semibold'>{product?.code}</span>
                </span>
              </label>
            </div>
          </fieldset>

            <p className="text-sm">Highest Rated Product</p>

            <div className="-ml-0.5 flex">
              <StarIconFill/>
              <StarIconFill/>
              <StarIconFill/>
              <StarIconFill/>
              <StarIconHole/>
            </div>
          </div>

          <p className="text-lg font-bold">${product?.price}</p>
        </div>

        <div className="mt-4">
          <h2 className='text-xl mb-2 text-black'>Key Features</h2>
          <div className="prose max-w-none">
            <ul>
              {product?.features?.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>

          <a href="#more-info" className="mt-2 text-universal text-md font-medium underline">View more info</a>
        </div>

        <div className="mt-8">

          <div className="mt-8 flex gap-4">
          
            <button
             onClick={()=>setShowPopup(true)}
              type="submit"
              className="block rounded bg-universal px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
            >
              Purchase
            </button>
            {/* Popup */}
            {
              showPopup && <PopupBG><ProductPopup setOrderId={setOrderId} product={product} setShowPopup={setShowPopup} setConfirmPopup={setConfirmPopup}/></PopupBG>
            }
            {confirmPopup && <PopupBG><ConfirmPopup orderId={orderId} price={product?.price} setConfirmPopup={setConfirmPopup}/></PopupBG>}


          </div>
        </div>
      </div>
    </div>
  </div>



{/* ALL section */}
<section id='more-info'>
<nav className="flex border-b border-gray-100 text-sm font-medium mt-5">
  <a href="#specification" className="-mb-px border-b border-current p-4 text-universal">
    Specification
  </a>

  <a href="#description" className="-mb-px border-b border-transparent p-4 hover:text-universal ">
    Description
  </a>

  <a href="#reviews" className="-mb-px border-b border-transparent p-4 hover:text-universal">
    Reviews
  </a>
</nav>

<div className='space-y-4'>
<Specification specification={product?.specification}/>
<Description description={product?.description}/>
<Reviews id={product?._id}/>
</div>
</section>


</div>

</div>
    );
};

export default ProductPage;