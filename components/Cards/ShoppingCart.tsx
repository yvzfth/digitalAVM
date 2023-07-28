import { CartContext } from '@/context/CartContext';
import products from '@/utils/products';
import React, { useContext } from 'react';

interface ShoppingCartProps {
  // items: Item[];
  // totalPrice: number;
  className?: string;
  style?: React.CSSProperties;
}

function ShoppingCart({ className, style }: ShoppingCartProps) {
  const { data, setData } = useContext(CartContext);
  let total = 0;
  return (
    <div
      className={`bg-white shadow-md p-4 rounded-lg ${className}`}
      style={style}
    >
      <h2 className='text-lg font-bold mb-4'>Shopping Cart</h2>
      {data?.map((id) => {
        const product = products.find((product) => product.id === id);
        total += product?.price!;
        return (
          <div
            key={product?.id}
            className='flex items-center justify-between mb-2'
          >
            <div className='flex items-center gap-4'>
              <div className='w-20 h-20'>
                <img
                  className='w-20 h-20 rounded-xl'
                  src={product?.img}
                  alt=''
                />
              </div>
              <div>{product?.title}</div>
            </div>
            <div>{product?.price.toFixed(2) + '₺'}</div>
          </div>
        );
      })}
      <hr />
      <div className='flex justify-between mt-4'>
        <div>Total:</div>
        <div className='text-red-600'>{total.toFixed(2) + '₺'}</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
