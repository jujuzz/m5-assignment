import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navBar";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import "./App.css";

export const App = () => {
  const [cart, setCart] = useState({});

  const handleEditCart = (isAdd, productID) => {
    const prev = cart.hasOwnProperty(productID) ? cart[productID] : 0;
    const newCart = {...cart};
    newCart[productID] = isAdd ? prev + 1 : Math.max(0, prev - 1);
    setCart(newCart);
  }

  return (
    <div className="App">
      <Router>
        <NavBar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home 
                cart={cart}
                handleEditCart={handleEditCart} 
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
