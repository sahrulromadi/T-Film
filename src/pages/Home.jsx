import React from "react";
import Hero from "./section/Hero";
import Trending from "./section/Trending";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-blue-200">
      <Hero />
      <Trending />
    </main>
  );
};

export default Home;
