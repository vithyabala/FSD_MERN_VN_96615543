// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setProducts={setProducts} products={products} />} />
        <Route path="/products" element={<ProductList products={products} setProducts={setProducts} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}