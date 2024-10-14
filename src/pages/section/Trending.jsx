import React from "react";
import "../../assets/css/Trending.css";

const Trending = () => {
  // loop
  const items = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <section className="px-7 py-10 space-y-5 text-white bg-background md:px-20">
      <div className="title flex justify-between">
        <h3 className="font-bold">Trending Movies</h3>
        <button className="border border-white rounded-xl bg-transparent px-5">
          View More
        </button>
      </div>
      <div className="trending-grid flex whitespace-nowrap overflow-x-auto gap-4 scrollbar-hide">
        {/* items */}
        {items.map((_, index) => (
          <div
            className="items space-y-2 flex-shrink-0 w-[150px] md:w-[200px] h-[300px] flex flex-col"
            key={index}
          >
            <img
              src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2XMBScqx3UqBR8UT7WGbTs72lyG.jpg"
              alt="cover"
              className="rounded-2xl w-full h-auto"
            />
            <p className="font-semibold whitespace-normal break-words overflow-hidden text-ellipsis h-[50px]">
              Venom Venom Venom Venom Venom Venom Venom Venom
            </p>
          </div>
        ))}
        {/* items end */}
      </div>
    </section>
  );
};

export default Trending;
