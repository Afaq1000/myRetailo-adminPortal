import "./style-navbar.css";
import React from "react";
import { Link } from "react-router-dom";
{
  /* <link rel="stylesheet" type="text/css" href="style.css" /> */
}

const NavBar = () => {
  return (
    <nav className="navigation">
      <ul className="container">
        <h1>Welcome to Retailo</h1>
        <h4>Admin Portal</h4>
        <li>
          <Link to="/">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
