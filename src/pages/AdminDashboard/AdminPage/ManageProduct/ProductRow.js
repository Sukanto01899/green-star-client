import React from 'react';
import { DeleteIcon, EditIcon } from '../../../../assets/icons/icons';

const ProductRow = () => {
    return (
        <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
        <td class="whitespace-nowrap px-4 py-2">
        <span
  class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
>
  <button
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Edit Product"
  >
    <EditIcon/>
  </button>

  <button
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    <DeleteIcon/>
  </button>
</span>

        </td>
      </tr>
    );
};

export default ProductRow;