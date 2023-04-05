import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 10,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 20,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 30,
      image: 'https://picsum.photos/200/300',
    },
  ];

  function handleAddToCart(product: IProduct) {
    console.log(`Added ${product.name} to cart!`);
  }

  return (
    <div className='flex flex-wrap  gap-4 m-4'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          //   className='my-4'
        />
      ))}
    </div>
  );
}

export default ProductList;
