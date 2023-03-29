import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ProductCard from './ProductCard';

const Products = () => {
    const [products] = useProducts()
    
    return (
        <section className=' dark:bg-dark-main bg-light-main'>
            <div className="xl:w-25 mx-auto text-black px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-0">
  <div>
  <div className="max-w-screen-xl md:px-0 py-8 sm:py-12 lg:py-16">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl text-universal">What makes us special</h2>

      <p className="mt-4 text-dark-main dark:text-light-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
        sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
      </p>
    </div>

{/* Product grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {products?.map(product => <ProductCard product={product}/>)}
    </div>

  </div>
  </div>
</div>

        </section>
    );
};

export default Products;