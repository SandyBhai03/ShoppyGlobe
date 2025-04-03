import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png"

function Header() {
  const categoryList = ["Home", "Beauty", "Fragrances", "Furniture", "Groceries"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 🔹 Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm.trim()}`);
    }
  };

  return (
    <>
      <div className="header1 flex items-center justify-between w-full h-12 bg-orange-300 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="font-bold text-black font-serif text-2xl">
          <Link to="/">ShoppyGlobe <i className="fa-solid fa-globe"></i></Link>
          {/* <img className="w-51" src={logo} alt="image not found"/> */}
        </h2>

        <div className="flex items-center">
          {/* 🔹 Search Bar with Form */}
          <form onSubmit={handleSearch} className="hidden sm:flex items-center mr-4">
            <input
              className="h-9 w-40 sm:w-60 md:w-80 lg:w-86 text-slate-700 font-medium rounded-full bg-slate-200 pl-3 pr-2 border-none outline-none"
              type="text"
              placeholder="Search Here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass sm:ml-4 lg:ml-4 text-xl cursor-pointer hover:scale-105 transition-all text-gray-100 hover:text-orange-600"></i>
            </button>
          </form>

          {/* 🔹 Cart Link */}
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping text-xl mr-4 sm:mr-6 cursor-pointer text-gray-200 hover:text-orange-500 transition-all"></i>
          </Link>

          {/* 🔹 Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar Categories */}
      <nav className={`sm:flex ${isMenuOpen ? "block" : "hidden"} bg-[#FFC8DD] h-9 w-full shadow-md`}>
        <ul className="w-full bg-orange-200 flex flex-col sm:flex-row justify-center items-center py-2">
          {categoryList.map((category, idx) => (
            <li key={idx} className="px-4 py-[2px] text-black cursor-pointer rounded-md font-medium hover:bg-orange-300 transition-all">
              <Link to={category === "Home" ? "/" : `/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;


// import React, { useState } from "react";
// import DarkMode from "./Darkmode";
// import { Link } from "react-router-dom";

// function Header() {
//   const categoryList = ["Home", "Products", "Top Rated", "Mens Wear", "Womens Wear"];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className="header1 flex items-center justify-between w-full h-12 bg-orange-300 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 lg:pl-25">
//         <h2 className="font-bold text-black text-lg">
//           ShoppyGlobe <i className="fa-solid fa-globe"></i>
//         </h2>
//         <div className="flex items-center">
//           <div className="hidden sm:flex items-center mr-4">
//             <input
//               className="h-9 w-40 sm:w-60 md:w-80 lg:w-86 text-slate-700  font-medium rounded-full bg-slate-200 pl-3 pr-2 border-none outline-none"
//               type="text"
//               placeholder="Search Here..."
//             />
//             <i className="fa-solid fa-magnifying-glass sm:ml-7 lg:ml-6 mr-6  text-xl cursor-pointer hover:scale-105 transition-all dura text-gray-100 dark:text-gray-100 hover:text-orange-600 dark:hover:text-gray-100"></i>
//             <div>
//               {/* <DarkMode /> */}
//             </div>
//           </div>
//           <Link to="/cart">
//           <i className="fa-solid fa-cart-shopping text-xl mr-4 sm:mr-6 cursor-pointer text-gray-200 hover:text-orange-500 dark:hover:text-gray-100 hover:scale-105 transition-all duration-200"></i>
//           </Link>
//           <div className="sm:hidden">
//             <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:cursor-pointer focus:outline-none">
//               <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
//             </button>
//           </div>
//         </div>
//       </div>
//       <nav className={`sm:flex ${isMenuOpen ? "block" : "hidden"} bg-[#FFC8DD] w-full shadow-md shadow-gray-200`}>
//         <ul className="w-full bg-orange-200 flex flex-col shadow-2xl shadow-gray-200 sm:flex-row justify-center items-center py-2 sm:py-0">
//           {categoryList.map((category, idx) => (
//             <li
//               key={idx}
//               className="px-4 py-1 text-black cursor-pointer rounded-md font-medium hover:bg-orange-300 transition-all duration-200"
//             >
//               {category}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Header;