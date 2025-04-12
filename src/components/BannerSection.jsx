'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerSection() {
  const banners = [
    {
      src: '/assets/images/banners/banner1.avif',
      title: 'Master the Game of Kings',
    },
    {
      src: '/assets/images/banners/banner2.avif',
      title: 'Train with Experts at The Chess Classes',
    },
    {
      src: '/assets/images/banners/banner3.avif',
      title: 'Unlock Strategic Thinking',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
      }} loop={true}
      className="w-full"
    >
      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[500px] md:h-[550px]">
            <img
              src={banner.src}
              alt={banner.title}
              className="w-full h-full object-cover brightness-[0.6]" // ✅ darken image
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
                {banner.title}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
