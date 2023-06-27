import React from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signOut } from "../utils/auth";
import { useState } from "react";

const Navbar = ({ setSearchInput, count }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const handleSignIn = () => {
    navigate("/login");
    setLogin(false);
  };

  const handleSignOut = () => {
    signOut(() => {
      console.log("logout success");
      navigate("/");
      setLogin(true);
    });
  };

  return (
    <div className="navbar">
      <img
        onClick={() => {
          navigate("/");
        }}
        className="navbar_elements"
        src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
        alt="logo"
      />
      <div className="search">
        <input
          type="text"
          placeholder="Search Products..."
          onChange={handleSearchInput}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2015/2015241.png"
          alt="search"
        />
      </div>
      <div className="navbar_elements cart">
        <img
          onClick={() => {
            navigate("/checkout");
          }}
          src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"
          alt="cart"
        />
        <span>{count}</span>
      </div>
      {login ? (
        <button onClick={handleSignOut} className="logout">
          Logout
        </button>
      ) : (
        <button onClick={handleSignIn} className="logout">
          Sign In
        </button>
      )}
      {/* <button onClick={handleSignOut} className="logout">
          Logout
        </button> */}
    </div>
  );
};

export default Navbar;
