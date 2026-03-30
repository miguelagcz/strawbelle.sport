import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
const [size, setSize] = useState("");


  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const [index, setIndex] = useState(0); 

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center bg-primary text-accent'>
        Loading...
      </section>
    );
  }

  const { title, price, description, images } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 min-h-screen bg-primary text-accent flex items-center'>
      <div className='container mx-auto'>
        
        <div className='flex flex-col lg:flex-row items-center gap-10'>
          
          {/* IMAGE */}
          <div className='flex flex-1 justify-center items-center bg-surface border border-border rounded-xl p-8 relative'>

            <img
              className='max-w-[250px] lg:max-w-sm mx-auto hover:scale-105 transition duration-300'
              src={images[index]}
              alt=''
            />

            {/* IZQUIERDA */}
            <button
              onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
              className='absolute left-2 bg-black/50 text-white p-2 rounded'
            >
              ◀
            </button>

            {/* DERECHA */}
            <button
              onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
              className='absolute right-2 bg-black/50 text-white p-2 rounded'
            >
              ▶
            </button>

          </div>

          {/* TEXT */}
          <div className='flex-1 text-center lg:text-left'>
            
            <h1 className='text-2xl lg:text-3xl font-semibold mb-4 max-w-[500px]'>
              {title}
            </h1>

            <div className='text-2xl text-secondary font-bold mb-6'>
              $ {price}
              <div className="mb-6">
  <p className="mb-2 font-medium">Selecciona talla:</p>

  <div className="flex gap-2">
    {["S", "M", "L", "XL"].map((s) => (
      <button
        key={s}
        onClick={() => setSize(s)}
        className={`px-4 py-2 border rounded-md transition 
        ${size === s 
          ? "bg-secondary text-white border-secondary" 
          : "border-border text-accent hover:bg-surface"}`}
      >
        {s}
      </button>
    ))}
  </div>
</div>
            </div>

            <p className='text-muted mb-8 leading-relaxed'>
              {description}
            </p>

            <button
  onClick={() => {
    if (!size) {
      alert("Selecciona una talla");
      return;
    }

    addToCart({ ...product, size }, product.id);
  }}
  className='bg-secondary hover:bg-secondaryHover py-4 px-8 text-white rounded-lg transition font-semibold'
>
  Add to cart
</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;