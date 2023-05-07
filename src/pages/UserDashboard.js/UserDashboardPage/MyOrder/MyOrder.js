import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import axiosApi from '../../../../api/axiosApi';
import auth from '../../../../firebase.init';
import OrderRow from './OrderRow';

const MyOrder = () => {
  const [order, setOrder] = useState(null);
  const [user, loading, error] = useAuthState(auth);

  useEffect(()=>{
    axiosApi.get(`/order-list/${user.email}?state=all`)
    .then(res => setOrder(res.data))
  }, [user.email])

  const getOrderByState = (state)=>{
    axiosApi.get(`/order-list/${user.email}?state=${state}`)
    .then(res => setOrder(res.data))
  }
  
    return (
        <div>
            <h1 className='text-xl'>My Order</h1>

            <div>
            <nav class="flex border-b border-gray-100 text-sm font-medium">
  <Link href="" class="-mb-px border-b border-current p-4 text-cyan-500">
    All order
  </Link>

  <Link href="" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    Panding
  </Link>

  <Link href="" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    Paid
  </Link>

  <Link href="" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    Shiped
  </Link>
</nav>
            </div>


{/* table */}

<div class="overflow-x-auto bg-white">
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Product
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Order ID
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Quantity
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Price
        </th>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
     
      <OrderRow/>
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default MyOrder;