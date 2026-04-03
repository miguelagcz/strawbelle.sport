import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cartItems, itemAmount } = useContext(CartContext); // asegúrate de traer cartItems también

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
          ? 'bg-primary/90 backdrop-blur py-4 shadow-lg'
          : 'bg-transparent py-6'
      } fixed w-full z-10 transition-all duration-300`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
          <img className='w-[40px]' src={Logo} alt='Logo' />
        </Link>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          {/* icon */}
          <BsBag className='text-2xl text-border' />

          {/* badge: solo se muestra si itemAmount > 0 */}
          {itemAmount > 0 && (
            <div className='bg-secondary absolute -right-2 -bottom-2 text-[11px] w-[20px] h-[20px] text-border rounded-full flex justify-center items-center font-bold shadow-lg ring-2 ring-primary'>
              {itemAmount}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;