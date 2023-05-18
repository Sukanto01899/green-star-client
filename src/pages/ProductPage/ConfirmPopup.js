import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ConfirmPopup = ({price, setConfirmPopup, orderId}) => {
    return (
        
            <section class="rounded-3xl shadow-2xl bg-white">
  <div class="p-8 text-center sm:p-12 relative">
    <HiXMark onClick={()=> setConfirmPopup(false)} className='absolute right-8 top-8 text-2xl cursor-pointer'/>
    <p class="text-sm font-semibold uppercase tracking-widest text-universal">
      Your order is now pending
    </p>

    <h2 class="mt-6 text-3xl font-bold">
      Thanks for your purchase, Please pay now!
    </h2>

    <Link
      class="mt-8 inline-block w-full rounded-full bg-universal py-4 text-sm font-bold text-white shadow-xl"
      to={`/dashboard/payment/${orderId}`}
    >
      Complete Payment Now ( $ {price} )
    </Link>
  </div>
</section>
       
    );
};

export default ConfirmPopup;