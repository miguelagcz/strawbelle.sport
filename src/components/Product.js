import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

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
    <div className="text-accent">
      <div className='border border-border bg-surface h-[320px] lg:h-[350px] mb-4 relative overflow-hidden group transition rounded-lg'>
        
        {/* IMAGE */}
     <div className='w-full h-full flex justify-center items-center'>
  <div className='w-[200px] mx-auto flex justify-center items-center relative'>
    
    <img
      className='max-h-[160px] group-hover:scale-110 transition duration-300'
      src={images[index]}
      alt=''
    />

            {/* 🔥 BOTONES DE SLIDER */}
            <button
              onClick={prevImage}
              className='absolute left-0 bg-black/50 text-white p-1 rounded'
            >
              <BsChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className='absolute right-0 bg-black/50 text-white p-1 rounded'
            >
              <BsChevronRight />
            </button>

          </div>
        </div>

        {/* botones lado derecho */}
        <div  className='absolute top-6 right-5 p-2 flex flex-col gap-y-2 
bg-black/30 md:bg-transparent 
rounded-lg 
opacity-100 md:opacity-0 md:group-hover:opacity-100 
transition-all duration-300'>
          
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-secondary hover:bg-secondaryHover rounded-md transition'>
              <BsPlus className='text-3xl' />
            </div>
          </button>

          <Link
            to={`/product/${id}`}
            className='w-12 h-12 md:w-10 md:h-10 bg-primary border border-border flex justify-center items-center text-accent rounded-md hover:bg-surface transition'
          >
            <BsEyeFill />
          </Link>

        </div>
      </div>

      {/* text */}
      <div>
        <div className='text-sm capitalize text-muted mb-1'>
          {category}
        </div>

        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1 hover:text-secondary transition'>
            {title}
          </h2>
        </Link>

        <div className='font-semibold text-secondary'>
          $ {price}
        </div>
      </div>
    </div>
  );
};


export default Product;