import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';
import PopupBG from '../../../../components/Popup/PopupBG';
import SuccessPopup from './SuccessPopup';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const {price, userEmail, _id, title, quantity} = order;
    const [successPopup, setSuccessPopup] = useState(false);
    const [paymentLoading, setPaymentLoading] = useState(false)

    useEffect(()=>{
      setPaymentLoading(true)
        axios.post(`https://green-star.onrender.com/create-payment-intent`, {price}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => {
            if(res.data.clientSecret){
                setClientSecret(res.data.clientSecret)
                setPaymentLoading(false)
            }
        })
        .catch(err => {
            toast.error(err.message)
            setPaymentLoading(false)
        })
    }, [price])

    const handleSubmit =async (e)=>{
        e.preventDefault()
        setPaymentLoading(true)

        if(!stripe || !elements){
            setPaymentLoading(false)
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            setPaymentLoading(false)
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            setPaymentLoading(false)
            setCardError(error.message);
            setSuccess('')
          }else {
            setCardError('')
          }

        //   confirm card payment
        setPaymentLoading(true)
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userEmail,
                },
              },
            },
          );

          if(intentError){
            setCardError(intentError.message)
            setPaymentLoading(false)
          }else{
            setCardError('')
            setTransactionID(paymentIntent.id)
            // Update order status
              axios.patch(`https://green-star.onrender.com/payment/success/${_id}?email=${userEmail}`, {trxID: transactionID, title: title, price: price, quantity}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
              })
              .then(res => {
                if(res.data.acknowledged){
                    setSuccess('Your payment completed')
                    setPaymentLoading(false)
                    setSuccessPopup(true)
                }
              })
              .catch(err => {
                toast.error(err.message)
                setPaymentLoading(false)
            })
          }
    }
    
    return (
       <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#424770',
              fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
              fontSmoothing: 'antialiased',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className=' bg-universal text-white py-1 w-full rounded-md mt-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
        {cardError && <p className='text-red-500 text-sm'>{cardError}</p>}
        {success && <p>{success}</p>}

        {/* Popup */}
        {successPopup && <PopupBG><SuccessPopup transactionID={transactionID}/></PopupBG>}

        {/* Loader */}
        {paymentLoading && <PopupBG><RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/></PopupBG>}
       </>
    );
};

export default CheckoutForm;