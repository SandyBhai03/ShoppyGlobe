import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

 products.map(product => console.log(product.category))
  // Ensure categories are extracted safely
  const categories = [
    "All",
    ...new Set((products || []).map((p) => p.category)),
  ];

  // Safe filtering
  const filteredProducts = (products || []).filter(
    (product) =>
      (product?.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product?.category === selectedCategory)
  );

  if (loading)
    return (
      <p className="text-center font-semibold text-lg my-7">
        Products Loading...
      </p>
    );
  if (error)
    return (
      <p className="font-semibold text-center m-4 mt-6 text-lg">
        Error fetching products
      </p>
    );

  return (
    <>
      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center px-12 py-4 gap-4 mb-5">
       <h3 className=" font-semibold text-lg">Filter Products</h3> 
        <select
          className="border text-gray-700 font-semibold px-3 py-1 rounded "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option className="font-medium" key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Product List */}
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-15 px-11 lg:px-12 pb-7">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg font-semibold">
            No products found.
          </p>
        )}
      </div>
    </>
  );
};

export default ProductList;
