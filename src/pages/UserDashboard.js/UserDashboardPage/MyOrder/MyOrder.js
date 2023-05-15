import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import axiosApi from '../../../../api/axiosApi';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';
import OrderRow from './OrderRow';

const MyOrder = () => {
  const [orders, setOrders] = useState(null)
  const [user, loading] = useAuthState(auth);
  const [orderStatus, setOrderStatus] = useState('all');
  const [signOut] = useSignOut(auth)

  useEffect(()=>{
    axiosApi.post(`/order-list/${user.email}?status=${orderStatus}`)
    .then(res => setOrders(res.data))
    .catch(err => {
      toast.error(err.code)
      if(err.response.status===403 || err.response.status === 401){
        return signOut()
      }
    })
  }, [orderStatus, user.email, signOut])

  const handleStatus = (status)=>{
    setOrders(null)
    setOrderStatus(status);
  }
  
    return (
        <div>
            <h1 className='text-xl'>My Order</h1>

            <div>
            <nav className="flex border-b border-gray-100 text-sm font-medium">
  <button onClick={()=> handleStatus('all')} className={`-mb-px border-b ${'all'=== orderStatus ? 'text-cyan-500 border-current' : 'text-black border-transparent hover:text-cyan-500'} p-4`}>
    All order
  </button>

  <button onClick={()=> handleStatus('pending')}  className={`-mb-px border-b ${'pending'=== orderStatus ? 'text-cyan-500 border-current' : 'text-black border-transparent hover:text-cyan-500'} p-4`}>
    Pending
  </button>

  <button onClick={()=> handleStatus('paid')} className={`-mb-px border-b ${'paid'=== orderStatus ? 'text-cyan-500 border-current' : 'text-black border-transparent hover:text-cyan-500'} p-4`}>
    Paid
  </button>

  <button onClick={()=> handleStatus('shipped')} className={`-mb-px border-b ${'shipped'=== orderStatus ? 'text-cyan-500 border-current' : 'text-black border-transparent hover:text-cyan-500'} p-4`}>
    Shipped
  </button>
  
  <button onClick={()=> handleStatus('canceled')} className={`-mb-px border-b ${'canceled'=== orderStatus ? 'text-cyan-500 border-current' : 'text-black border-transparent hover:text-cyan-500'} p-4`}>
    Canceled
  </button>
</nav>

</div>


{/* table */}

<div className="overflow-x-auto bg-white">
  <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Product
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Order ID
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Quantity
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Price
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Status
        </th>
        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
     
      {orders ? orders.map((order, _id) => <OrderRow key={_id} order={order}/>) : <PopupBG>
      <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
        </PopupBG>}
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default MyOrder;