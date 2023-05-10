import React from 'react';

const ConfirmPopup = ({price, setConfirmPopup}) => {
    return (
        <div className='bg-white p-4 shadow-md'>
            <h1 className='text-2xl'>Complete your payment now</h1>
            <div className='flex justify-between mt-5'>
            <button className='bg-universal px-4 py-1 text-white'>Pay</button>
            <button onClick={()=>setConfirmPopup(false)}>Later</button>
            </div>
        </div>
    );
};

export default ConfirmPopup;