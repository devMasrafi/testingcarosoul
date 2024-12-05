"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Home() {
  const sliderArray = [
    {
      image: "/image1.webp",
      title: "title 1",
    },
    {
      image: "/image2.webp",
      title: "title 2",
    },
    {
      image: "/image3.webp",
      title: "title 3 ",
    },
    {
      image: "/image4.webp",
      title: "title 4",
    },
    {
      image: "/image5.webp",
      title: "title 5",
    },
    {
      image: "/image6.webp",
      title: "title 6",
    },
  ];

  return (
    <div className="bg-gray-200 h-full flex justify-center items-center">
      <main className="relative h-[44rem] w-[65rem]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            // el is used if you want to make a custome class and use a module as i did in (short)
            el: ".swiper-custom-pagination",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderArray.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="swiper-custom-pagination absolute flex justify-center gap-2 -bottom-6 left-0 right-0"></div>
      </main>
    </div>
  );
}
