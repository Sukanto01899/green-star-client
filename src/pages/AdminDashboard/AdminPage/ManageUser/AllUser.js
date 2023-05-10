import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import UserRow from './UserRow';

const AllUser = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState([])

  const {data, refetch} = useQuery('users', ()=>{
    fetch(`http://localhost:5000/all-user/${user.email}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${localStorage.getItem('access-token')}`
      }
    }).then(res => res.json()).then(data=> setUsers(data))
  })
  
  
    return (
        <div>
            <h1 className='text-xl mb-5'>All User</h1>


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
     
      {users.map(user=> <UserRow user={user}/>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;