import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import ConfirmPopup from '../../../../components/Popup/ConfirmPopup';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';

const UserRow = ({user, refetch}) => {
  const [authUser] = useAuthState(auth)
    const {name, email, img, role, uid} = user;
    const [adminRoleChangePopup, setAdminRoleChangePopup] = useState(false)
    const [userRoleChangePopup, setUserRoleChangePopup] = useState(false)

    const handleAdminChangeRole = ()=>{
      const loadingToast = toast.loading('Please wait...')
      axios.patch(`https://green-star.onrender.com/role/change/${authUser.email}?role=admin`,{email}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
      })
      .then(res => {
        if(res.data.acknowledged){
          toast.success('Successfully role changed', {id: loadingToast})
          setAdminRoleChangePopup(false)
          refetch()
        }
      })
      .catch(err => toast.error(err.message, {id: loadingToast}))
    }

    const handleUserChangeRole = ()=>{
      const loadingToast = toast.loading('Please wait...')
      axios.patch(`https://green-star.onrender.com/role/change/${authUser.email}?role=user`,{email}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
      })
      .then(res => {
        if(res.data.acknowledged){
          toast.success('Successfully role changed', {id: loadingToast})
          setUserRoleChangePopup(false)
          refetch()
        }
      })
      .catch(err => toast.error(err.message, {id: loadingToast}))
    }
    
    return (
        <>
        <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
         {name ? name : 'Unknown'}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{uid}</td>
        <td class="whitespace-nowrap px-4 py-2">
        <span
  class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
>
{role !== 'admin' ? <button
  onClick={()=> setAdminRoleChangePopup(true)}
  class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
  title="Delete Product"
>
  Make Admin
</button> : <button
  onClick={()=> setUserRoleChangePopup(true)}
  class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
  title="Delete Product"
>
  Remove Admin
</button>}
</span>

        </td>
      </tr>

      {/* Popup */}
      {adminRoleChangePopup && <PopupBG><ConfirmPopup popupCloseFunc={setAdminRoleChangePopup} confirmFunc={handleAdminChangeRole}/></PopupBG>}
      {userRoleChangePopup && <PopupBG><ConfirmPopup popupCloseFunc={setUserRoleChangePopup} confirmFunc={handleUserChangeRole}/></PopupBG>}
        </>
    );
};

export default UserRow;