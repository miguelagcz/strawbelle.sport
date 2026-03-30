import React from 'react';
import ScorpionImg from '../img/scorpion.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className='h-[800px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/lienzo.svg')" }}
    >
      
      <div className='container mx-auto flex justify-around h-full'>
        
        {/* Texto */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>FRØNX
          </div>

          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            Street / Gym Wear<br />
            <span className='font-semibold'>No equals. Ø mercy</span>
          </h1>

          <Link
            to={'/'}
           className="transition transform hover:scale-105 active:scale-95"
          >
            Discover More
          </Link>
        </div>

        {/* Escorpión */}
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