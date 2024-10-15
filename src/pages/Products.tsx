import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Products: React.FC = () => {
  const products = [
    { name: 'UI Kit', image: 'https://framerusercontent.com/images/3NekYMfrLTJH95xWIQcvWm5RQ.png', description: 'Modern UI components designed to enhance user experience and streamline development for advanced web applications.' },
    { name: 'E-Store Template', image: 'https://framerusercontent.com/images/irCsWC2hIi9vlgpIjbBwV8YUds.jpg', description: 'Launch your online store with a customizable, responsive design featuring integrated payment solutions.' },
    { name: 'Font Pack', image: 'https://framerusercontent.com/images/CCV1ZRWNKbtCLoa8Y9QbUn6wLFo.png', description: 'A versatile collection of fonts offering a wide range of styles to complement any design project.' },
  ];

  return (
    <section id="products" className="products-section py-16 bg-background text-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center text-4xl font-bold mb-12">Our Products</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card flex flex-col items-center bg-card-bg p-6 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="product-card__title text-xl font-semibold mb-2">{product.name}</h3>
                <p className="product-card__description text-center mb-4">{product.description}</p>
                <a href="#" className="product-card__cta bg-primary text-background py-2 px-4 rounded hover:bg-secondary transition duration-300">
                  Learn More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;