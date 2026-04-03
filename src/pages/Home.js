import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "sportswear" || item.category === "women's clothing"
    );
  });

  return (
    <div className="bg-primary text-border min-h-screen">
      <Hero />
<section 
  id="products" 
  className='pt-40 md:pt-48 lg:pt-56 pb-16 bg-primary'
>
  <div className='container mx-auto'>
        
    <h2 className="text-3xl text-center mb-12 mt-4">
      <span className="font-semibold">Productos</span>{' '}
      <span style={{ fontFamily: "'Great Vibes', cursive" }}>
        destacados
      </span>
    </h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
      {filteredProducts.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>

  </div>
</section>
    </div>
  );
};

export default Home;