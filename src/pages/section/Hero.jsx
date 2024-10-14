import React, { useState, useEffect } from "react";
import { getNowPlaying } from "../../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Hero = () => {
  const imgUrl = import.meta.env.VITE_BASEIMGURL;
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getNowPlaying().then((result) => {
      setMoviesList(result);
    });
  }, []);

  // py-10 px-7 md:px-20 md:py-28
  return (
    <section className="relative">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {/* items */}
        {moviesList.slice(0, 5).map((data, index) => (
          <SwiperSlide key={index}>
            {/* banner */}
            <div className="bg-black absolute inset-0 z-10 opacity-50"></div>
            <div className="banner absolute inset-0 h-full w-full">
              <img
                src={
                  data.backdrop_path
                    ? `${imgUrl}${data.backdrop_path}`
                    : "fallback_image_url"
                }
                alt={`banner-${data.title}`}
                className="w-full h-full"
              />
            </div>
            {/* banner end */}
            <div className="items relative mt-20 text-white flex flex-col gap-7 justify-center items-center z-20 py-10 px-7 md:flex-row md:gap-20 md:px-20 md:py-28">
              <div className="items-text order-2 space-y-5 text-justify md:order-1 md:w-2/3 md:space-y-7">
                <h2>{data.title}</h2>
                <p>{data.overview}</p>
                <div className="items-button flex gap-5">
                  <button className="bg-red-500 border border-red-500 rounded-xl px-5 py-2">
                    Watch Now
                  </button>
                  <button className="border border-white bg-transparent rounded-xl px-5 py-2">
                    Watch Trailer
                  </button>
                </div>
              </div>
              <div className="items-image order-1 flex md:order-2 md:w-1/3">
                <img
                  src={
                    data.poster_path
                      ? `${imgUrl}${data.poster_path}`
                      : "fallback_image_url"
                  }
                  alt={`cover-${data.title}`}
                  className="w-52 h-72 rounded-lg object-contain md:shadow-2xl md:w-64 md:h-96"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* items end */}
      </Swiper>
    </section>
  );
};

export default Hero;
