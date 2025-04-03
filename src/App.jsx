import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchResults from "./pages/SearchResults";
import SuccessPage from "./pages/SuccessPage";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <Router>
    <div className="app-container">
    {/* Header is placed only once above Routes */}
    <Header />
      <ToastContainer position="top-right" autoClose={1500} /> {/* Add ToastContainer */}
      <div className="main-content">
          <Suspense fallback={<div className="text-center text-lg font-semibold py-4">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/category/:categoryName" element={<SearchResults />} /> 
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success" element={<SuccessPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        <Footer /> {/* ✅ Footer always stays at bottom */}
    </div>
      
     </Router>
  );
}

export default App;
