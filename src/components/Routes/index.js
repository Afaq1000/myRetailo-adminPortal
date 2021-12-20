import React from "react";
// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import Error from "./Error";
import { ProductsAdd } from "../products/ProductsAdd";
import { OrdersAdd } from "../orders/OrdersAdd";
// import {OrdersNav } from "../orders/OrdersNav";
import {OrderDelete} from "../orders/OrderDelete";
import { SignIn } from "../auth/SignIn";
import { SignUp } from "../auth/SignUp";
// import { ProductsNav } from "../products/ProductsNav";
import {ProductDelete} from "../products/ProductDelete";
// import NavBar from "../Nav/NavBar";
import Navbar from "../navbar/Navbar";

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/productDelete" element={<ProductDelete />} />
        {/* <Route path="/product" element={<ProductsNav />} /> */}
        <Route path="/productAdd" element={<ProductsAdd />} />
        <Route path="/orderAdd" element={<OrdersAdd />} />
        <Route path="/orderDelete" element={<OrderDelete />} />
        {/* <Route path="/order" element={<OrdersNav />} /> */}
        

        {/* <Route  path='/about'
           element={ <About />}
          /> */}

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;
