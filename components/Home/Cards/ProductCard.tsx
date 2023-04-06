import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
  className?: string;
  style?: React.CSSProperties;
}

function ProductCard({
  product,
  onAddToCart,
  className,
  style,
}: ProductCardProps) {
  return (
    <div
      className={`w-[14rem] h-[28rem] grid grid-rows-2 bg-white shadow-card rounded-md ${className}`}
      style={style}
    >
      <div className='relative rounded-t-md h-[14rem] row'>
        {/* <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: 'cover',
            borderTopLeftRadius: '.375rem',
            borderTopRightRadius: '.375rem',
          }}
        /> */}
      </div>
      <div className='p-4'>
        {/* <h2 className='text-lg font-bold mb-2'>{product.name}</h2>
        <p className='text-gray-700 mb-4'>{product.description}</p> */}
        <div className='flex justify-between'>
          <div>${product.price}</div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
