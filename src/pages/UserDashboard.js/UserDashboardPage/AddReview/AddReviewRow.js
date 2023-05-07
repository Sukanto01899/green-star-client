import React from 'react';

const AddReviewRow = ({order}) => {
    const {title} = order
    return (
        <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {title}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">asdas</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">asd</td>
        <td class="whitespace-nowrap px-4 py-2">
        <span
  class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm"
>

<button
    class="inline-block p-2 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Delete Product"
  >
    Add Review
  </button>
</span>

        </td>
      </tr>
    );
};

export default AddReviewRow;