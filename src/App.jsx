import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
  return (
    
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;