import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51MkOiLGupxHp69KXdzCQy4LGa6Y3BgNL8lCwzHIkNHqi9X8kpW8xev7ZD0C7qfvRsvGaBmll3rGrJvTBl6eaFOX800xZOCsbmZ');

const Payment = () => {
    const {id} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        axios(`https://green-star.onrender.com/order/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => {
            setOrder(res.data)
        })
        .catch(err => toast.error(err.message))
    }, [id])

    if(!order){
        return 'Loading...'
    }

    return (
      
      <section>
        <h1 class="sr-only">Checkout</h1>
      
        <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
          <div class="bg-gray-50 py-12 md:py-16">
            <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div class="flex items-center gap-4">
                <span class="h-10 w-10 rounded-full bg-blue-700"></span>
      
                <h2 class="font-medium text-gray-900">{order.title}</h2>
              </div>
      
              <div>
                <p class="text-2xl font-medium tracking-tight text-gray-900">
                  ${order.price}
                </p>
      
                <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
              </div> 
            </div>
          </div>
      
          <div class="bg-white py-12 md:py-16">
            <div class="mx-auto max-w-lg px-4 lg:px-8">
                <h2 className='mb-4'>Enter Your card details</h2>
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order}/>
              </Elements>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Payment;