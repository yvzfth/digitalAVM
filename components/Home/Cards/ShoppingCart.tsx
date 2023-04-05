import React from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
}

interface ShoppingCartProps {
  items: Item[];
  totalPrice: number;
  className?: string;
  style?: React.CSSProperties;
}

function ShoppingCart({
  items,
  totalPrice,
  className,
  style,
}: ShoppingCartProps) {
  return (
    <div
      className={`bg-white shadow-md p-4 rounded-lg ${className}`}
      style={style}
    >
      <h2 className='text-lg font-bold mb-4'>Shopping Cart</h2>
      {items.map((item) => (
        <div key={item.id} className='flex justify-between mb-2'>
          <div>{item.name}</div>
          <div>${item.price}</div>
        </div>
      ))}
      <div className='flex justify-between mt-4'>
        <div>Total:</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
