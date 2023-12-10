import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductPage from "./pages/product-page";
import CartPage from "./pages/cart-page";
import NotFoundPage from "./pages/not-found-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
