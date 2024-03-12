'use client'
import { portfolios } from "@/constants"
import { useWindowsSize } from "@/hooks/useWindowsSize";
import { useEffect, useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PortfolioItem } from "./PortfolioItem";

export const PortfolioSection = ({data, title}: {data: typeof portfolios, title: string}) => {
  const swiperRef = useRef<SwiperType>();
  const [sliderPerView, setSliderPerView] = useState(3);
  const {width} = useWindowsSize();
  useEffect(() => {
    if (width < 768) {
      setSliderPerView(1);
    } else if (width < 1268) {
      setSliderPerView(2);
    } else {
      setSliderPerView(3);
    }
  }, [width]);
  

  return (
    <div className="section-padding max-width">
      <div className="pb-3 border-b border-peach flex justify-between items-center">
        <p>{title}</p>
        <div className="flex gap-2">
          <button
            className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft />
          </button>
          <button
            className="bg-peach-200 border border-peach p-1 rounded text-grey-700"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="pt-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={sliderPerView}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {
            data.map((portfolio, index) => (
              <SwiperSlide key={index}>
                <PortfolioItem portfolio={portfolio} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}