import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({order, handleOrderCancel}) => {
  const {title, userEmail, productId, quantity, price, status, _id} = order;
  const navigation = useNavigate()
    return (
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

  {status === 'paid' ? <button
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    Paid
  </button>  : null}
  {status === 'pending' ? <>
  <button
  onClick={()=> navigation(`/dashboard/payment/${_id}`)}
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    Pay Now
  </button>
  <button
  onClick={()=> handleOrderCancel(_id)}
  class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
  title="Delete Product"
>
  Cancel
</button></>
   : null}
  {
    status === 'shipped' ? <button onClick={()=> navigation('/dashboard/add-review')}
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    Rate Now
  </button> : null
  }
</span>

        </td>
      </tr>
    );
};

export default OrderRow;