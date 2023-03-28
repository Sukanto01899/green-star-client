import React from 'react';
import ProductRow from './ProductRow';

const AllProduct = () => {
    return (
        <div>
            <h1 className='text-xl mb-5'>All Product</h1>

            {/* Product table */}

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
          Date of Birth
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Role
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Salary
        </th>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
     
      <ProductRow/>
    </tbody>
  </table>
</div>



        </div>
    );
};

export default AllProduct;