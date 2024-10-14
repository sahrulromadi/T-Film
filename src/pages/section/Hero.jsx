import React from "react";
import { DataFilm } from "../../data/DataFilm";

const Hero = () => {
  return (
    <section className="relative py-10 px-7 md:px-20 md:py-28">
      {/* items 1 */}
      {/* banner */}
      <div className="banner absolute inset-0">
        <img
          src={DataFilm[0].banner}
          alt={`banner-${DataFilm[0].title}`}
          className="w-full h-full"
        />
      </div>
      {/* banner end */}
      <div className="items relative mt-20 text-white flex flex-col gap-7 justify-center items-center md:flex-row md:gap-20">
        {/* text */}
        <div className="items-text order-2 space-y-5 text-justify md:order-1 md:w-2/3 md:space-y-7">
          <h2>{DataFilm[0].title}</h2>
          <p>{DataFilm[0].sinopsis}</p>
          <div className="items-button flex gap-5">
            <button className="bg-red-500 border border-red-500 rounded-xl px-5 py-2">
              Watch Now
            </button>
            <button className="border border-white bg-transparent rounded-xl px-5 py-2">
              Watch Trailer
            </button>
          </div>
        </div>
        {/* text end */}
        {/* cover image */}
        <div className="items-image order-1 flex md:order-2 md:w-1/3">
          <img
            src={DataFilm[0].cover}
            alt={`cover-${DataFilm[0].title}`}
            className="w-52 h-72 rounded-lg object-contain md:shadow-2xl md:w-64 md:h-96"
          />
        </div>
      </div>
      {/* cover image end */}
      {/* items 1 end */}
    </section>
  );
};

export default Hero;
