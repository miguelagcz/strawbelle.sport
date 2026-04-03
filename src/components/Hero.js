import React from 'react';
import ScorpionImg from '../img/scorpion3.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const handleScrollToProducts = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      className='h-[800px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/lienzo.svg')" }}
    >
      <div className='container mx-auto flex justify-around h-full'>
        
        {/* Texto */}
        <div className='flex flex-col justify-center'>
  
          <div className='font-semibold flex items-center uppercase mb-6'>
            <div className='w-10 h-[2px] mr-3 bg-pink-400 
            origin-left scale-x-0 animate-lineGrow
            shadow-[0_0_10px_rgba(236,72,153,0.6)]'></div>

            Strawbelle 
            <span 
              className='ml-2 normal-case'
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Sportswear 🍓
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4'>
            <span className='block font-light'>Pilates</span>
            <span className='block font-light'>Gym</span>
            <span className='block font-semibold text-pink-400 mt-2'>
              Pretty & strong.
            </span>
            <span className='block font-light mt-2'>Lifestyle</span>
          </h1>

          {/* 🔥 BOTÓN MEJORADO */}
          <button
            onClick={handleScrollToProducts}
            className="mt-6 inline-block px-7 py-3 rounded-full 
            bg-white/5 backdrop-blur-md
            border border-white/20
            text-border tracking-wide
            transition-all duration-300 ease-out
            hover:bg-pink-500/20 hover:border-pink-400
            hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]
            hover:scale-105 active:scale-95"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Discover More
          </button>

        </div>

        {/* Imagen */}
        <div className='hidden lg:block'>
          <img
            src={ScorpionImg}
            alt=''
            draggable="false"
            className='select-none'
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;