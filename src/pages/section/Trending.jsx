import React, { useState, useEffect } from "react";
import "../../App.css";
import { getTrendingList } from "../../data/api";

const Trending = () => {
  const imgUrl = import.meta.env.VITE_BASEIMGURL;
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getTrendingList().then((result) => {
      setMoviesList(result);
    });
  }, []);

  return (
    <section className="px-7 space-y-5 text-white md:px-20">
      <div className="title flex justify-between">
        <h3 className="font-bold">Trending Movies</h3>
        <button className="border border-white rounded-xl bg-transparent px-5">
          View More
        </button>
      </div>
      <div className="trending-grid flex whitespace-nowrap overflow-x-auto gap-4 scrollbar-hide">
        {/* items */}
        {moviesList.map((data, index) => (
          <div
            className="items space-y-2 flex-shrink-0 w-[150px] h-[300px] flex flex-col md:w-[200px]"
            key={index}
          >
            <img
              src={
                data.poster_path
                  ? `${imgUrl}${data.poster_path}`
                  : "fallback_image_url"
              }
              alt={`cover-${data.title}`}
              className="rounded-2xl w-full h-[250px]"
            />
            <p className="font-semibold overflow-hidden text-ellipsis h-[50px]">
              {data.title}
            </p>
          </div>
        ))}
        {/* items end */}
      </div>
    </section>
  );
};

export default Trending;
