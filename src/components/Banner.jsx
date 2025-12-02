import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.avif";
import slide3 from "../assets/slide3.webp";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Cozy Winter Outfit for Your Pet",
      subtitle: "Keep your pets warm and stylish this winter!"
    },
    {
      id: 2,
      image: slide2,
      title: "Winter Grooming Services",
      subtitle: "Professional care for your furry friends."
    },
    {
      id: 3,
      image: slide3,
      title: "Winter Nutrition Plan",
      subtitle: "Healthy meals to keep your pets active and happy."
    }
  ];

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start md:items-start px-6 md:px-16 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
