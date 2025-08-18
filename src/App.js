import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import Kids from "./pages/Kids/Kids";
import CartPage from "./pages/CartPage/CartPage";
import FAQ from "./pages/Faq/Faq";
import Returns from "./pages/Returns/Returns";
import Shipping from "./pages/Shipping/Shipping";
import Payments from "./pages/Payments/Payments";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Support from "./pages/Support/Support";
import AuthPage from "./pages/AuthPage/AuthPage";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route
              path="/women"
              element={<Women searchQuery={searchQuery} />}
            />
            <Route path="/men" element={<Men searchQuery={searchQuery} />} />
            <Route path="/kids" element={<Kids searchQuery={searchQuery} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
