import ShoppingCart from '@/components/Home/Cards/ShoppingCart';
import Layout from '@/components/Layout';
import { CartContext } from '@/context/CartContext';
import { Button } from '@nextui-org/react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const { data, setData } = useContext(CartContext);
  return (
    <Layout>
      <div className='container mx-auto px-4'>
        <ShoppingCart className='my-4' style={{ width: '300px' }} />
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
