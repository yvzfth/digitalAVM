import products from '@/utils/products';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find(
    (product) => _.kebabCase(product.title) === slug
  );

  // -------- CHANGE BELOW ------------------

  return (
    <div className='h-screen display:flex justify-center items-center  '>
      <div className='product-container display: flex gap-20 mx-auto my-auto  justify-center items-center h h-4/5  w-4/6   '>
        <div className='product-image'>
          <img
            className=' rounded-2xl'
            src={product?.img}
            alt='product-image'
          />
        </div>
        {/* ------slider-image------  */}
        {/* <div className="product-image-slider">
        <div className="product-image">
          <img src={images[activeIndex]} alt="product-image" />
        </div>
        <button className="slider-prev-button" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="slider-next-button" onClick={handleNextClick}>
          Next
        </button>
      </div> */}

        <div className='product-details p-5'>
          <h1 className='product-title mb-5 font-bold border-b-2'>
            {product?.title}
          </h1>
          <p className='product-price mb-3'>{product?.price}₺</p>
          <p className='product-description mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            enim eu ante cursus luctus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Sed consectetur nunc
            vel ultricies commodo. Vestibulum et eleifend elit.
          </p>
          <div className='product-colors mb-2'>
            <span>Color:</span>
            <select>
              <option value='Red'>Red</option>
              <option value='Blue'>Blue</option>
              <option value='Green'>Green</option>
            </select>
          </div>
          <div className='product-sizes mb-2'>
            <span>Size:</span>
            <select>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
            </select>
          </div>
          <div className='product-quantity'>
            <span>Quantity:</span>
            <input className=' ml-5' type='number' />
          </div>

          <div className='buttons  mt-5 '>
            <button className='bg-transparent hover:bg-green-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl'>
              Buy Now
            </button>
            <button className='bg-transparent ml-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-3xl'>
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
