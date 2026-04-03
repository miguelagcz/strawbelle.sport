import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // 👇 CAMBIO: usar images
  const { id, images, category, title, price } = product;

  // 👇 estado para cambiar imagen
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
<div className="text-border group">
  <div className='relative overflow-hidden rounded-xl bg-surface'>
    
    {/* IMAGE */}
 <div className='w-full aspect-[3/4] overflow-hidden'>
      
      <img
        src={images[index]}
        alt=''
        className='h-full object-contain transition duration-500 group-hover:scale-105'
      />

      {/* SLIDER */}
      <button
        onClick={prevImage}
        className='absolute left-2 opacity-0 group-hover:opacity-100 transition bg-black/40 text-white p-2 rounded-full'
      >
        <BsChevronLeft />
      </button>

      <button
        onClick={nextImage}
        className='absolute right-2 opacity-0 group-hover:opacity-100 transition bg-black/40 text-white p-2 rounded-full'
      >
        <BsChevronRight />
      </button>

      {/* BOTONES HOVER */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 
      opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
      transition-all duration-300'>

     <button
  onClick={() => {
    addToCart(product, id);

    toast.success("✨ Agregado al carrito 💖");
  }}
  className='bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-pink-400 hover:text-white transition'
>
  Add
</button>

        <Link
          to={`/product/${id}`}
          className='bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm hover:bg-pink-400 hover:text-white transition'
        >
          View
        </Link>

      </div>
    </div>

  </div>

  {/* TEXT */}
  <div className='mt-3'>
    <div className='text-xs text-muted uppercase tracking-wider'>
      {category}
    </div>

    <Link to={`/product/${id}`}>
      <h2 className='font-medium hover:text-secondaryHover transition'>
        {title}
      </h2>
    </Link>

    <div className='mt-1 font-semibold text-secondary'>
      $ {price}
    </div>
  </div>
</div>
  );
};


export default Product;