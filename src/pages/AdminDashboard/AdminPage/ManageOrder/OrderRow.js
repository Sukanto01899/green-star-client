import React, { useState } from 'react';
import PopupBG from '../../../../components/Popup/PopupBG';
import CancelPopup from './CancelPopup';
import ShippingPopup from './ShippingPopup';

const OrderRow = ({order, handleStatusChange}) => {
  const {title, userEmail, productId, quantity, price, status, _id} = order;
  const [showShippingPopup, setShowShippingPopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  
    return (
      <>
        <tr>
        <td title={title} class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {title.substring(0, 20)}
        </td>
        <td title={_id} class="whitespace-nowrap px-4 py-2 text-gray-700">{_id.substring(0, 10)}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{quantity}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${price.toFixed(2)}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{status.toUpperCase()}</td>
        <td class="whitespace-nowrap px-4 py-2">
        <span
  class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
>

  {status === 'paid' ? <button onClick={()=>setShowShippingPopup(true)}
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    Ship Now
  </button>  : null}
  {status === 'pending' ? <>
  <button
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
   Knock
  </button>
  <button
  onClick={()=> setShowCancelPopup(true)}
  class="inline-block p-2 text-red-500 hover:bg-gray-50 focus:relative"
  title="Delete Product"
>
  Cancel
</button></>
   : null}
</span>

        </td>
      </tr>
      {showShippingPopup && <PopupBG><ShippingPopup order={order} setShowShippingPopup={setShowShippingPopup} handleStatusChange={handleStatusChange}/></PopupBG>}
      {showCancelPopup && <PopupBG><CancelPopup id={_id} setShowCancelPopup={setShowCancelPopup} handleStatusChange={handleStatusChange}/></PopupBG>}
      </>
    );
};

export default OrderRow;