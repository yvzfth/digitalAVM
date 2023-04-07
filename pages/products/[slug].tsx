import products from '@/utils/products';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((product) => product.title === slug);

  // -------- CHANGE BELOW ------------------
  return <div>{JSON.stringify(product)}</div>;
};

export default ProductDetail;
