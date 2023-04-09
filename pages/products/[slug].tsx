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
   
      <div className="flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="w-full md:w-1/2 p-8">
          <img src={product?.img} alt="product" />
        </div>
        <div className="w-full md:w-1/3 p-8">
          <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
          <p className="text-lg mb-2">{product?.price}₺</p>
          <div className="flex flex-col mb-4">
            <label htmlFor="color">Color</label>
            <select id="color" className="py-2 px-4 rounded-lg border">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="size">Size</label>
            <select id="size" className="py-2 px-4 rounded-lg border">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              className="py-2 px-4 rounded-lg border"
            />
          </div>
          <div className="flex flex-row mt-8">
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2">
              Buy Now
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-8">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Free Delivery</h2>
            <p>Enter your postal code for delivery availability</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Return Delivery</h2>
            <p>Free 30 days delivery returns.</p>
          </div>
        </div>
      </div>
    );
};

export default ProductDetail;
