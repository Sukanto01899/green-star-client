import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RotatingLines } from 'react-loader-spinner';
import axiosApi from '../../../../api/axiosApi';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';
import ReviewCard from './ReviewCard';

const AddReview = () => {
    const [orders, setOrders] = useState(null);
    const [user] = useAuthState(auth);
    const [showReviewPopup, setShowReviewPopup] = useState(false);

    useEffect(()=>{
        axiosApi.get(`/order-list/${user.email}?status=shipped`)
        .then(res => setOrders(res.data))
    }, [user.email])
    
    return (
        <div>
            <h1 className='text-xl mb-4'>Add Review</h1>
           <div className='bg-white p-6'>
           <h2>All delivered product</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-4">
              {orders ? orders.map(order => <ReviewCard order={order} setShowReviewPopup={setShowReviewPopup} showReviewPopup={showReviewPopup}/>) : <PopupBG>
              <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
                </PopupBG>}
           </div>
           </div>
        </div>
    );
};

export default AddReview;