import React from 'react';
import ProductCard from './ProductCard';
import products from '@/utils/products';

function ProductList() {
  function handleAddToCart(product: IProduct) {
    console.log(`Added ${product.title} to cart!`);
  }

  return (
    <div className='flex flex-wrap  gap-4 m-4'>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAddToCart={handleAddToCart}
          //   className='my-4'
        />
      ))}
    </div>
  );
}

export default ProductList;
