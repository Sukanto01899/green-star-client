import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { DeleteIcon } from '../../../../assets/icons/icons';
import ConfirmPopup from '../../../../components/Popup/ConfirmPopup';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';

const ProductRow = ({product, refetch}) => {
  const [user] = useAuthState(auth)
  const [deletePopup, setDeletePopup] = useState(false)
  const {title, stock, price, brand, _id} = product;

  const handleDeleteProduct = ()=>{
    const loadingToast = toast.loading('Please wait...')
    axios.delete(`http://localhost:5000/product/delete/${_id}/${user.email}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access-token')}`
      }
    })
    .then(res => {
      if(res.data.acknowledged){
        toast.success('Successfully deleted', {id: loadingToast})
        refetch()
      }
    })
    .catch(err =>{
      toast.error(err.message, {id: loadingToast})
    })
  }


    return (
        <>
        <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {title}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{stock}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${price}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{brand}</td>
        <td class="whitespace-nowrap px-4 py-2">
        <span
  class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
>

  <button
  onClick={()=> setDeletePopup(true)}
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    <DeleteIcon/>
  </button>
</span>

        </td>
      </tr>

      {/* Popup */}
      {deletePopup && <PopupBG><ConfirmPopup popupCloseFunc={setDeletePopup} id={_id} confirmFunc={handleDeleteProduct}/></PopupBG>}
        </>
    );
};

export default ProductRow;