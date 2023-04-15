import ShoppingCart from '@/components/Home/Cards/ShoppingCart';
import Layout from '@/components/Layout';
import { CartContext } from '@/context/CartContext';
import { Button } from '@nextui-org/react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
const items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
];
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

const Cart = () => {
  const { data, setData } = useContext(CartContext);
  return (
    <Layout>
      <div className='container mx-auto px-4'>
        <ShoppingCart
          items={items}
          totalPrice={totalPrice}
          className='my-4'
          style={{ width: '300px' }}
        />
        <div>
          <Button
            onPress={() => {
              setData([]);
              toast.success('Satın Alma Başarılı 🎉');
            }}
          >
            Satın Al
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
