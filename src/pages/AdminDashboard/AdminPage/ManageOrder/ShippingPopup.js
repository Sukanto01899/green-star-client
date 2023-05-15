import React from 'react';

const PopupContent = ({order, setShowShippingPopup, handleStatusChange}) => {
    const {title, userEmail, productId, quantity, price, status, _id, address, phone} = order;
    const order_info = [
        {detail: 'Product Name',info: title},
        {detail: 'Product ID',info: productId},
        {detail: 'Order ID',info: _id},
        {detail: 'Customer Email',info: userEmail},
        {detail: 'Quantity',info: quantity},
        {detail: 'Price',info: price},
        {detail: 'Status',info: status},
        {detail: 'Address',info: address},
        {detail: 'Phone',info: phone},
    ]
    return (
        <div class="rounded-lg bg-white p-8 shadow-sm">
  <h2 class="text-lg font-bold">Order Information</h2>

  <div>
  
  {order_info.map(info => <p class="mt-2 text-sm text-gray-500">
    <span className='font-semibold'>{info.detail}</span> {info.info}
  </p>)}
  
  </div>

  <div class="mt-4 flex gap-2">
    <button
    onClick={()=> handleStatusChange(_id, 'shipped', setShowShippingPopup)}
      type="button"
      class="rounded bg-universal px-4 py-2 text-sm font-medium text-white"
    >
      Yes, Ship Now
    </button>

    <button onClick={()=> setShowShippingPopup(false)}
      type="button"
      class="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
    >
      No, Later
    </button>
  </div>
</div>
    );
};

export default PopupContent;