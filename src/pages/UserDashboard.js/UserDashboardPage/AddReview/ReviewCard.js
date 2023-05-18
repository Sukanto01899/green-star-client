import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PopupBG from "../../../../components/Popup/PopupBG";
import auth from "../../../../firebase.init";
import ReviewPopup from "./ReviewPopup";

const ReviewCard = ({order, setShowReviewPopup, showReviewPopup}) => {
  const [user] = useAuthState(auth);
  const [review, setReview] = useState(null);
  const [image, setImage] = useState('')

  useEffect(()=>{
    axios(`https://green-star.onrender.com/rating/check/${user?.email}/${order?.productId}`)
    .then(res => setReview(res.data))
  }, [user, order])

  useEffect(()=>{
    axios(`https://green-star.onrender.com/product/image/${order?.productId}`)
    .then(res => setImage(res.data.image))
  }, [order])
   
    return (
      <div className="block rounded-lg p-4 shadow-md shadow-indigo-100">
      <img
        alt="Home"
        src={image}
        className="h-60 w-full rounded-md object-contain"
      />
    
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>
    
            <dd className="text-sm text-gray-500">${order?.price.toFixed(2)}</dd>
          </div>
    
          <div className="flex justify-between items-center">
            <dt title={order?.title} className="">{order?.title.substring(0, 20)}</dt>
    
            <button onClick={()=> setShowReviewPopup(true)} className=" bg-universal text-white p-1 text-sm rounded-md">{review ? 'Edit Review' : 'Add review'}</button>
          </div>
        </dl>
    
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Status</p>
    
              <p className="font-medium">{order?.status}</p>
            </div>
          </div>
    
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Rating</p>
    
              <p className="font-medium">{review ? review.rating : 'Not rated'}</p>
            </div>
          </div>
    
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
    
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Review</p>
    
              <p className="font-medium">{review ? 'Added' : 'Not added'}</p>
            </div>
          </div>
        </div>
      </div>

{/* Popup */}
{showReviewPopup && <PopupBG><ReviewPopup reviewId={review._id} order={order} setShowReviewPopup={setShowReviewPopup}/></PopupBG>}

    </div>
       
    );
};

export default ReviewCard;