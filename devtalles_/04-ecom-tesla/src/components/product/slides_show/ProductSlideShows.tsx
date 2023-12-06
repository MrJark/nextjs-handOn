"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Swiper as SwiperObject } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideshow.css";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShows = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#2e63eb",
            "--swiper-pagination-color": "#2e63eb",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        // autoplay={{ // para que cambie la imagen de forma automática de uyn lado a otro pero me parece mala ux así que no la voy a implementar
        //   delay: 2500,
        // }}
        thumbs={{
          swiper: thumbsSwiper,
          // swiper: thumbsSwiper && !thumbsSwiper.destroy ? thumbsSwiper : null // este puede hacer falta porque pùede dar error el hehco de que al inicio sea null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={1024}
              height={800}
              src={`/products/${image}`}
              alt={title}
              className="rounded-lg object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={300}
              height={300}
              src={`/products/${image}`}
              alt={title}
              className="rounded-lg object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
