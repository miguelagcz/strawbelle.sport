import React, { useState } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className='bg-primary py-12 border-t border-border relative'>
      <div className='container mx-auto flex flex-col items-center gap-6'>

        {/* SOCIAL */}
        <div className='flex gap-6'>
          <a href="https://instagram.com/TU_CUENTA" target="_blank" rel="noreferrer"
            className='text-white text-2xl hover:text-secondary transition hover:scale-110'>
            <FaInstagram />
          </a>

          <a href="https://tiktok.com/@TU_CUENTA" target="_blank" rel="noreferrer"
            className='text-white text-2xl hover:text-secondary transition hover:scale-110'>
            <FaTiktok />
          </a>
        </div>

        {/* BOTÓN MODAL */}
        <button
          onClick={() => setOpen(true)}
          className='text-white text-sm border border-border px-4 py-2 rounded hover:bg-surface transition'
        >
          About FRØNX
        </button>

        {/* COPYRIGHT */}
        <p className='text-white text-sm opacity-70'>
          © {new Date().getFullYear()} FRØNX
        </p>
      </div>

      {/* 🔥 MODAL */}
      {open && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50'>

          <div className='bg-surface border border-border rounded-xl p-8 w-[90%] max-w-md text-center relative'>

            {/* CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className='absolute top-3 right-3 text-white text-lg'
            >
              ✕
            </button>

            <h2 className='text-xl font-semibold mb-4 text-white'>
              Contacto FRØNX
            </h2>

            <p className='text-muted mb-6'>
              Disciplina sobre motivación.
              Constancia sobre suerte. 
              Fronx es para los que forjan su propio
            camino con esfuerzo y dedicación. Si tú no te detienes, tu estilo tampoco debería hacerlo. Sigue constante, sigue Fronx.

            </p>

            <div className='flex justify-center gap-6'>
              <a href="https://instagram.com/TU_CUENTA" target="_blank" rel="noreferrer"
                className='text-white text-2xl hover:text-secondary transition'>
                <FaInstagram />
              </a>

              <a href="https://tiktok.com/@TU_CUENTA" target="_blank" rel="noreferrer"
                className='text-white text-2xl hover:text-secondary transition'>
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