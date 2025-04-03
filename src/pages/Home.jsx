import React from "react";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="">
    <Hero />
      <h2 className="text-2xl font-extrabold mt-7 text-center m-3">TOP PRODUCTS: </h2>
      <ProductList />
    </div>
  );
};

export default Home;