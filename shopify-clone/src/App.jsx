import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartLength={cart.length} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route
            path="productDetails/:category/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
