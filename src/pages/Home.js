import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

import useApi from '../hooks/useApi';

export const Home = () => {
  const { data, loading } = useApi('/products');

  return (
    <div>
      <Hero />
      {loading && <div>Loading...</div>}
      {!loading && data && <ProductList data={data} />}
    </div>
  );
};

export default Home;
