import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import Kids from "./pages/Kids/Kids";
import "./App.css";
import CartPage from "./pages/CartPage/CartPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FAQ from "./pages/Faq/Faq";
import Returns from "./pages/Returns/Returns";
import Shipping from "./pages/Shipping/Shipping";
import Payments from "./pages/Payments/Payments";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Support from "./pages/Support/Support";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/returns" element={<Returns />} /> {/* ← Yeni route */}
            <Route path="/shipping" element={<Shipping />} /> {/* Yeni əlavə */}
            <Route path="/payments" element={<Payments />} /> {/* Yeni əlavə */}
            <Route path="/privacy" element={<Privacy />} /> {/* Yeni əlavə */}
            <Route path="/terms" element={<Terms />} /> {/* Yeni əlavə */}
            <Route path="/support" element={<Support />} /> {/* Yeni əlavə */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
