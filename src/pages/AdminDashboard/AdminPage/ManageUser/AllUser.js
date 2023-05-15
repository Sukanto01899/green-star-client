import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RotatingLines } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { NextIcon, PreviousIcon } from '../../../../assets/icons/icons';
import PopupBG from '../../../../components/Popup/PopupBG';
import auth from '../../../../firebase.init';
import UserRow from './UserRow';

const AllUser = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const {data, refetch} = useQuery('users', ()=>{
    fetch(`http://localhost:5000/all-user/${user.email}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access-token')}`
      }
    }).then(res => res.json()).then(data=> setUsers(data))
  })


  const handlePrevious = ()=>{
    if (page <= 0) return;
    let count = page
    setPage(count -=1)
  }

  const handleNext = ()=>{
    if (totalPages === page) return;
    let count = page
    setPage(count +=1)
  }

  
  
    return (
        <div>
            <h1 className='text-xl mb-5'>All User</h1>

{/* Limit Select */}
<div>
   <select onChange={(e)=> setLimit(e.target.value)} className='h-[35px] w-[80px] text-sm rounded-md mb-2'>
      <option value='10'>10</option>
      <option value='15'>15</option>
      <option value='20'>20</option>
    </select>
</div>


            {/* User table */}
            <div class="overflow-x-auto bg-white">
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Name
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Email
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          UID
        </th>
      
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
     
      {users ? users.map(user=> <UserRow user={user}/>) : <PopupBG>
      <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
        </PopupBG>}
    </tbody>
  </table>
</div>

{/* Pagination */}
<div class="flex items-center justify-center mt-4 gap-3">
  <button onClick={()=> handlePrevious()}
    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <PreviousIcon/>
  </button>

  <p class="text-sm text-gray-900">
    {page + 1}
    <span class="mx-0.25">/</span>
    {totalPages}
  </p>

  <button onClick={()=> handleNext()}
    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
  >
    <span class="sr-only">Next Page</span>
    <NextIcon/>
  </button>
</div>
        </div>
    );
};

export default AllUser;