import MultiActionAreaCard from '@/components/Home/Cards/MuiCard';
import Navbar from '@/components/Home/Navbar';
import products from '@/utils/products';
import { useRouter } from 'next/router';
import React from 'react';

const Search = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query.q);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(String(query.q).toLowerCase()!)
  );
  return (
    <div>
      <Navbar />
      <main className='mt-20'>
        {/* <ProductList /> */}
        <div className='container p-4 flex flex-wrap items-center justify-center md:justify-start gap-4 mx-auto'>
          {filteredProducts.map((product, index) => (
            <MultiActionAreaCard
              key={index}
              title={product.title}
              img={product.img}
              price={product.price}
              stock={product.stock}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;
