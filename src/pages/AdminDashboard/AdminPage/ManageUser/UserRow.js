import React from 'react';

const UserRow = ({user}) => {
    const {name, email, img, role, uid} = user;
    return (
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
  class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
  title="Delete Product"
>
  Make Admin
</button> : <button
  class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
  title="Delete Product"
>
  Remove Admin
</button>}
</span>

        </td>
      </tr>
    );
};

export default UserRow;