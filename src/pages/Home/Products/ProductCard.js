import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {title, image, price} = product
    return (
        <Link to={`/purchase/${product?._id}`} className="group block">
  <img
    src={image}
    alt={title}
    className="h-[300px] w-full object-cover sm:h-[450px] bg-white"
  />

  <div className="mt-3 flex justify-between text-sm">
    <div>
      <h3
        className="text-universal group-hover:underline group-hover:underline-offset-4"
      >
        {title}
      </h3>

      <p className="mt-1.5 max-w-[45ch] text-xs text-dark-main dark:text-light-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
        quia soluta quisquam voluptatem nemo.
      </p>
      <Link
  class="group relative inline-block text-sm font-medium text-universal focus:outline-none focus:ring active:text-red-500 mt-1"
  to={`/purchase/${product?._id}`}
>
  <span class="absolute inset-0 border border-current"></span>
  <span
    class="block border border-current bg-white px-8 py-2 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Purchase
  </span>
</Link>
    </div>

    <p className="text-dark-main dark:text-light-main">${price}</p>
  </div>
</Link>

      
    );
};

export default ProductCard;