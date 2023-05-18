import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import PopupBG from '../../../components/Popup/PopupBG';
import useProducts from '../../../hooks/useProducts';
import ProductCard from './ProductCard';

const Products = () => {
    const [products] = useProducts();

    if(!products){
      return (
        <PopupBG>
          <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
        </PopupBG>
      )
    }
    
    return (
        <section className=' dark:bg-dark-main bg-light-main'>
            <div className="xl:w-25 mx-auto text-black px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-0">
  <div>
  <div className="max-w-screen-xl md:px-0 ">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl text-universal">Buy Best Computer Case</h2>

      <p className="mt-4 text-dark-main dark:text-light-main">
      Specifications are subject to change without notice.
Products and models may vary depending on your region.
Contact your local retailer for more information.
      </p>
    </div>

{/* Product grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {products?.map((product, i) => <ProductCard key={i} product={product}/>)}
    </div>

  </div>
  </div>
</div>

        </section>
    );
};

export default Products;