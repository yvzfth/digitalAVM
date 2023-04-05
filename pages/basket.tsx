import ShoppingCart from '@/components/Home/Cards/ShoppingCart';
import Navbar from '@/components/Home/Navbar';
import React from 'react';
const items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
];
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

const Basket = () => {
  return (
    <div className='mt-20'>
      <Navbar />
      <div className='container mx-auto px-4'>
        <ShoppingCart
          items={items}
          totalPrice={totalPrice}
          className='my-4'
          style={{ width: '400px' }}
        />
      </div>
    </div>
  );
};

export default Basket;
