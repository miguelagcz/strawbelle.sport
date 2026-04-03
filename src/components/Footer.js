import React, { useState } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className='bg-primary py-5 border-t border-secondaryHover relative'>
      <div className='container mx-auto flex flex-col items-center gap-6'>

        {/* SOCIAL */}
        <div className='flex gap-6'>
          <a href="https://instagram.com/TU_CUENTA" target="_blank" rel="noreferrer"
            className='text-border text-2xl hover:text-secondaryHover transition hover:scale-110'>
            <FaInstagram />
          </a>

          <a href="https://tiktok.com/@TU_CUENTA" target="_blank" rel="noreferrer"
            className='text-border text-2xl hover:text-secondaryHover transition hover:scale-110'>
            <FaTiktok />
          </a>
        </div>

        {/* BOTÓN MODAL */}
        <button
          onClick={() => setOpen(true)}
          className='text-border text-sm border border-secondaryHover px-4 py-2 rounded hover:bg-secondaryHover transition'
        >
          About Strawbelle
        </button>

        {/* COPYRIGHT */}
        <p className='text-border text-sm opacity-70'>
          © {new Date().getFullYear()} Strawbelle GDL
        </p>
      </div>

      {/* 🔥 MODAL */}
      {open && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50'>

          <div className='bg-surface border border-border rounded-xl p-8 w-[90%] max-w-md text-center relative'>

            {/* CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className='absolute top-3 right-3 text-border text-lg'
            >
              ✕
            </button>

            <h2 className='text-xl font-semibold mb-4 text-border'>
              Puntos de Entrega
            </h2>

       <div className='text-muted mb-6 space-y-3 text-sm leading-relaxed'>

  <p className='flex items-center gap-2 justify-center lg:justify-start'>
    <span>🇲🇽✨</span>
    <span>Envíos a toda la República Mexicana</span>
    <span>✨🇲🇽</span>
  </p>

  <p className='flex items-start gap-2 justify-center lg:justify-start'>
    <span>🍓</span>
    <span>
      Envíos por paquetería Casa Blanca <br />
      <span className='text-xs text-muted'>
        (Al lado de Fiesta Americana)
      </span>
    </span>
  </p>

  <p className='flex items-center gap-2 justify-center lg:justify-start'>
    <span>🍓</span>
    <span>Envíos por Uber 🚕</span>
  </p>

  <p className='flex items-center gap-2 justify-center lg:justify-start text-pink-400 font-medium'>
    <span>🍓</span>
    <span>No cambios ni devoluciones</span>
  </p>

</div>

            <div className='flex justify-center gap-6'>
              <a href="https://instagram.com/TU_CUENTA" target="_blank" rel="noreferrer"
                className='text-border text-2xl hover:text-secondaryHover transition'>
                <FaInstagram />
              </a>

              <a href="https://tiktok.com/@TU_CUENTA" target="_blank" rel="noreferrer"
                className='text-border text-2xl hover:text-secondaryHover transition'>
                <FaTiktok />
              </a>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;