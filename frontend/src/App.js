import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const [items, setItems] = useState({});
  const [filteredSearch, setFilteredSearch] = useState("");
  const [count, setCount] = useState(0);

  const getItem = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getItem();
  }, []);

  const handleFilteredSearch = (value) => {
    setFilteredSearch(value);
  };

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  // console.log(count);

  return (
    <div className="app">
      <Navbar
        items={items}
        setSearchInput={handleFilteredSearch}
        count={count}
      />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/"
          element={
            <Products
              items={items}
              filteredSearch={filteredSearch}
              setCount={handleAddToCart}
            />
          }
        ></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
