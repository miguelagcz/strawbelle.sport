import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import toast from 'react-hot-toast';


const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const [orderSent, setOrderSent] = useState(false)

  
const handleCheckout = () => {
  const phone = "525582484544";


// 🚨 VALIDACIÓN DE TALLA
const hasNoSize = cart.some(item => !item.size);

if (hasNoSize) {
  toast.error("Selecciona talla en todos los productos");
  return;
}

 const message = cart.map(item => {
  return `• ${item.title} x${item.amount}
Talla: ${item.size || "N/A"}
Precio: $${item.price}`;
}).join("%0A");

  const totalPrice = `Total: $${parseFloat(total).toFixed(2)}`;

  const text = `🔥 Pedido FRØNX 🔥%0A%0A${message}%0A%0A${totalPrice}`;

  const url = `https://wa.me/${phone}?text=${text}`;

  setOrderSent(true);
clearCart();


setTimeout(() => {
  handleClose();
}, 2000);

setTimeout(() => {
  setOrderSent(false);
}, 3000);

  window.open(url, "_blank");
};

  return (
<div
  className={`${
    isOpen ? 'right-0' : '-right-full'
  } w-full bg-primary text-accent fixed top-0 h-screen flex flex-col shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
>

  {/* HEADER */}
  <div className='flex items-center justify-between py-6 border-b border-border flex-shrink-0'>
    <div className='uppercase text-sm font-semibold'>
      Shopping Bag ({itemAmount})
    </div>

    <div
      onClick={handleClose}
      className='cursor-pointer w-8 h-8 flex justify-center items-center'
    >
      <IoMdArrowForward className='text-2xl' />
    </div>
  </div>

  {/* ITEMS */}
  <div className='flex-1 min-h-0 overflow-y-auto overflow-x-hidden border-b border-border'>
    {cart.map((item) => (
      <CartItem item={item} key={item.id} />
    ))}
  </div>
      {/* footer */}
     <div className='flex flex-col gap-y-3 py-4 flex-shrink-0'>

  {orderSent ? (
    <div className="text-center py-6">
      <h2 className="text-lg font-semibold text-white mb-2">
            ¡Gracias por tu Preferencia!
      </h2>
      <p className="text-muted text-sm">
        Te redirigimos a WhatsApp para completar tu pedido.
      </p>
    </div>
  ) : (
    <>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>

        <div
          onClick={clearCart}
          className='cursor-pointer bg-secondary hover:bg-secondaryHover text-white w-12 h-12 flex justify-center items-center text-xl rounded-md transition'
        >
          🗑
        </div>
      </div>

      <button
      
        onClick={handleCheckout}
        className='bg-secondary hover:bg-secondaryHover active:scale-95 flex p-4 justify-center items-center text-white w-full font-medium rounded-md transition'
      >
        
        Checkout
      </button>
    </>
  )}

</div>
    </div>
  );
};

export default Sidebar;