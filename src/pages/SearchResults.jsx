import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

const SearchResults = () => {
  const { categoryName } = useParams(); // Get category from URL if present
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q")?.toLowerCase().trim() || ""; // Get search term from URL
  const { products, loading, error } = useFetchProducts(); // Fetch all products

  if (loading) return <p className="text-center font-semibold my-7">Loading products...</p>;
  if (error) return <p className="text-center text-lg font-semibold">Error fetching products</p>;

  // 🔹 Filter products by either search query OR category
  const filteredProducts = products.filter((product) => {
    if (categoryName) {
      // If category is present in URL, filter by category
      return product.category.toLowerCase() === categoryName.toLowerCase();
    } else if (searchQuery) {
      // If search query is present, filter by search term
      const titleMatch = product?.title?.toLowerCase().includes(searchQuery);
      const categoryMatch = product?.category?.toLowerCase().includes(searchQuery);
      const keywordMatch = product?.keywords?.some((keyword) => keyword.toLowerCase().includes(searchQuery));

      return titleMatch || categoryMatch || keywordMatch;
    }
    return false;
  });

  return (
    <div className="px-4 lg:px-12 py-5">
      <h2 className="text-gray-800 font-semibold text-lg mt-7 px-11 lg:px-12">
        {categoryName
          ? `Products in "${categoryName}"`
          : `Search Results for "${searchQuery}"`}
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 px-11 lg:px-12 mt-5 pb-7">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold mt-10">
          No products found for "<span className="text-orange-500">{categoryName || searchQuery}</span>"
        </p>
      )}
    </div>
  );
};

export default SearchResults;



// // ~~~~~~~~ Search Prducts when press enter after write query ~~~~~~~~~

// import React from "react";
// import { useLocation } from "react-router-dom";
// import ProductItem from "../components/ProductItem";
// import useFetchProducts from "../hooks/useFetchProducts";

// const SearchResults = () => {
//   const { products, loading, error } = useFetchProducts();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const searchQuery = searchParams.get("q")?.toLowerCase().trim() || ""; // Ensures a valid search term

//   if (loading) return <p className="text-center font-semibold my-7">Loading products...</p>;
//   if (error) return <p className="text-center text-lg font-semibold">Error fetching products</p>;

//   // 🔹 Check if the product matches search term in title, category, or any keyword
//   const filteredProducts = products.filter((product) => {
//     const titleMatch = product?.title?.toLowerCase().includes(searchQuery);
//     const categoryMatch = product?.category?.toLowerCase().includes(searchQuery);
//     const keywordMatch = product?.keywords?.some((keyword) => keyword.toLowerCase().includes(searchQuery));

//     return titleMatch || categoryMatch || keywordMatch;
//   });

//   return (
//     <div className="px-4 lg:px-12 py-5">
//     <h2 className="text-gray-800 font-semibold text-lg mt-7  px-11 lg:px-12">Match Results: </h2>
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-15 px-11 lg:px-12 mt-5 pb-7">
//           {filteredProducts.map((product) => (
//             <ProductItem key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-lg font-semibold mt-10">
//           No products found for "<span className="text-orange-500">{searchQuery}</span>"
//         </p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
