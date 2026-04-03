import React, { useContext, useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const [orderSent, setOrderSent] = useState(false);

  const handleCheckout = () => {

    // 🚨 carrito vacío
    if (cart.length === 0) {
      toast.error("🍓 Tu carrito está vacío 🛍️", {
        duration: 2500,
      });
      return;
    }

    const phone = "525582484544";

    // 🚨 talla
    const hasNoSize = cart.some(item => !item.size);
    if (hasNoSize) {
      toast.error("🍓 Ey! Te falta elegir tu talla 👀", {
        duration: 3000,
        style: {
          borderRadius: "999px",
          background: "rgba(30, 30, 30, 0.9)",
          color: "#fff",
          padding: "12px 18px",
          fontSize: "14px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
        },
      });
      return;
    }

    // 🚨 color
    const hasNoColor = cart.some(item => !item.color);
    if (hasNoColor) {
      toast.error("🍓 Elige tu color para continuar 🎨", {
        duration: 3000,
        style: {
          borderRadius: "999px",
          background: "rgba(30, 30, 30, 0.9)",
          color: "#fff",
          padding: "12px 18px",
          fontSize: "14px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
        },
      });
      return;
    }

    // 💎 mensaje
    const message = cart.map(item => {
      return `🍓 ${item.title} x${item.amount}
✨ Talla: ${item.size}
🎨 Color: ${item.color}
💲 Precio: $${item.price}`;
    }).join("%0A%0A");

    const totalPrice = `💖 Total: $${parseFloat(total).toFixed(2)} MXN`;

    const text = `🍓 Pedido Strawbelle 🍓%0A%0A${message}%0A%0A${totalPrice}`;

    const url = `https://wa.me/${phone}?text=${text}`;

    setOrderSent(true);
    clearCart();

    setTimeout(() => handleClose(), 2000);
    setTimeout(() => setOrderSent(false), 3000);

    window.open(url, "_blank");
  };

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-primary/95 backdrop-blur-xl text-border fixed top-0 h-screen flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-5 lg:px-8`}>

      {/* HEADER */}
      <div className='flex items-center justify-between py-6 border-b border-border/50'>
        <div className='uppercase text-xs tracking-widest font-semibold text-muted'>
          Shopping Bag ({itemAmount})
        </div>

        <div onClick={handleClose} className='cursor-pointer w-9 h-9 flex justify-center items-center rounded-full hover:bg-surface transition'>
          <IoMdArrowForward className='text-xl' />
        </div>
      </div>

      {/* ITEMS */}
      <div className='flex-1 overflow-y-auto py-4 space-y-4 border-b border-border/50'>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      {/* FOOTER */}
      <div className='flex flex-col gap-y-4 py-5'>
        {orderSent ? (
          <div className="text-center py-6">
            <h2 className="text-lg font-semibold mb-2">
              ¡Gracias por tu Preferencia!
            </h2>
            <p className="text-muted text-sm">
              Te redirigimos a WhatsApp para completar tu pedido.
            </p>
          </div>
        ) : (
          <>
            <div className='flex items-center justify-between'>
              <span className='text-sm uppercase tracking-wide text-muted'>Total</span>
              <div className='flex items-end gap-1'>
                <span className='text-2xl font-extrabold text-pink-400'>
                  ${parseFloat(total).toFixed(2)}
                </span>
                <span className='text-xs text-muted mb-1'>MXN</span>
              </div>
            </div>

            <div className='flex gap-3'>
              <button
                onClick={clearCart}
                className='w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-secondaryHover transition shadow-sm hover:scale-105'
              >
                <FiTrash2 />
              </button>

              <button
                onClick={handleCheckout}
                className='flex-1 bg-secondary hover:bg-secondaryHover text-white py-4 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]'
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;