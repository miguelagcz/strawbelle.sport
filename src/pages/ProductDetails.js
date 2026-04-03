import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [index, setIndex] = useState(0);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center bg-primary text-border'>
        Loading...
      </section>
    );
  }

  const { title, price, description, images } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 min-h-screen bg-primary text-border flex items-center'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-center'>

          {/* GALERÍA */}
          <div className='flex flex-1 flex-col items-center gap-4'>

            <div className='relative w-full max-w-[400px] bg-surface border border-border rounded-xl p-6 flex justify-center items-center'>
              <img
                src={images[index]}
                alt={title}
                className='max-w-full max-h-[350px] transition-transform duration-300 hover:scale-105 rounded-lg'
              />

              <button
                onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
                className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
              >
                ◀
              </button>

              <button
                onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
                className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
              >
                ▶
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className='flex gap-2 mt-3 justify-center flex-wrap'>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={title}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition ${
                    index === i ? "border-secondary" : "border-border"
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className='flex-1 flex flex-col items-center text-center space-y-6'>

            {/* TÍTULO */}
            <h1 className='text-3xl lg:text-4xl font-semibold tracking-tight leading-snug max-w-lg'>
              {title}
            </h1>

            {/* PRECIO */}
            <div className='flex items-end gap-2 justify-center'>
              <span className='text-4xl lg:text-5xl font-extrabold text-pink-400'>
                ${price.toFixed(2)}
              </span>
              <span className='text-sm text-muted mb-1'>MXN</span>
            </div>

            {/* TALLAS */}
            <div className='space-y-3'>
              <p className='text-sm font-medium text-muted'>Selecciona talla</p>

              <div className='flex gap-3 justify-center flex-wrap'>
                {["S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-5 py-2 rounded-full border transition-all
                    ${
                      size === s
                        ? "bg-secondary text-white border-secondary scale-105 shadow-md"
                        : "border-border text-border hover:bg-surface hover:scale-105"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* COLORES */}
            <div className='space-y-3'>
              <p className='text-sm font-medium text-muted'>Selecciona color</p>

              <div className='flex gap-4 justify-center'>
                {[
                  { name: "Rosa", value: "#EC4899" },
                  { name: "Negro", value: "#000000" },
                  { name: "Blanco", value: "#FFFFFF" },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all
                    ${
                      color === c.name
                        ? "scale-110 border-pink-400 shadow-md"
                        : "border-border hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.value }}
                  >
                    {color === c.name && (
                      <span className='text-xs text-white font-bold'>✓</span>
                    )}
                  </button>
                ))}
              </div>

              {/* LABEL */}
              <p className='text-xs text-muted'>
                Color seleccionado:{" "}
                <span className='text-pink-400'>
                  {color || "Ninguno"}
                </span>
              </p>
            </div>

            {/* DESCRIPCIÓN */}
            <p className='text-muted leading-relaxed max-w-md text-sm lg:text-base'>
              {description.length > 200
                ? `${description.slice(0, 200)}...`
                : description}
            </p>

            {/* BOTÓN */}
            <button
              onClick={() => {

                if (!size) {
                  toast.error("🍓 Elige tu talla 👀");
                  return;
                }

                if (!color) {
                  toast.error("🍓 Elige tu color 🎨");
                  return;
                }

                addToCart({ ...product, size, color }, product.id);

                toast.success("✨ Agregado al carrito 💖");
              }}
              className='bg-secondary hover:bg-secondaryHover py-4 px-8 text-white rounded-full transition-all font-semibold w-full max-w-xs shadow-md hover:scale-105 active:scale-95'
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