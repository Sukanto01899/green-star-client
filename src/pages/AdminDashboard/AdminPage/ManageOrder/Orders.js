import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import { NextIcon, PreviousIcon } from '../../../../assets/icons/icons';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';
import OrderRow from './OrderRow';

const MyOrder = () => {
  const [orders, setOrders] = useState(null);
  const [user, loading] = useAuthState(auth);
  const [orderStatus, setOrderStatus] = useState('all');
  const [signOut] = useSignOut(auth);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);


  useEffect(()=>{
    axios(`https://green-star.onrender.com/all-order/${user.email}?status=${orderStatus}&limit=${limit}&page=${page}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access-token')}`
      }
    })
    .then(res => {
      const {count, orders: all_orders} = res.data;
      setOrders(all_orders);
      setTotalPages(Math.ceil(count / limit))
    })
    .catch(err => {
      toast.error(err.code)
      if(err.response.status===403 || err.response.status === 401){
        return signOut()
      }
    })
  }, [signOut, orderStatus, user.email, limit, page, totalPages])

  const handleStatus = (status)=>{
    setOrders(null)
    setPage(0)
    setOrderStatus(status);
  }

  const handlePrevious = ()=>{
    if (page <= 0) return;
    let count = page
    setPage(count -=1)
  }

  const handleNext = ()=>{
    if (totalPages === page) return;
    let count = page
    setPage(count +=1)
  }

  // Handle order status change
  const handleStatusChange = async (id, status, setShowPopup)=>{
    const loadingToast = toast.loading('Please wait...');
    try{
      const response = await axios.patch(`https://green-star.onrender.com/order/status-change/${user.email}/${id}?status=${status}`,{}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access-token')}`
      }
    })
    if(response.data.acknowledged){
      toast.success(`Successfully ${status}`, {
        id: loadingToast
      })
      setShowPopup(false)
    }
    }
    catch(err){
      toast.error(err.message, {id: loadingToast})
      setShowPopup(false)
    }
  }
  
    return (
        <div>
            <h1 className='text-xl'>All Order</h1>


           

            <div className='flex flex-col md:flex-row justify-between items-center'>
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

{/* Limit Input */}
<div>
   <select onChange={(e)=> setLimit(e.target.value)} className='h-[35px] w-[80px] text-sm rounded-md'>
      <option value='10'>10</option>
      <option value='15'>15</option>
      <option value='20'>20</option>
    </select>
</div>

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
     
      {orders ? orders.map((order, _id) => <OrderRow key={_id} order={order} handleStatusChange={handleStatusChange}/>) : <PopupBG>
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


{/* Pagination */}
<div class="flex items-center justify-center mt-4 gap-3">
  <button onClick={()=> handlePrevious()}
    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <PreviousIcon/>
  </button>

  <p class="text-sm text-gray-900">
    {page + 1}
    <span class="mx-0.25">/</span>
    {totalPages}
  </p>

  <button onClick={()=> handleNext()}
    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <NextIcon/>
  </button>
</div>
        </div>
    );
};

export default MyOrder;