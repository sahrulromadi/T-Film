import React from "react";
import Hero from "./section/Hero";
import Trending from "./section/Trending";
import TopRated from "./section/TopRated";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-10 pb-10 bg-background">
      <Hero />
      <Trending />
      <TopRated />
    </main>
  );
};

export default Home;
