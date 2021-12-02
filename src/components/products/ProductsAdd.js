import React, { useState, useEffect } from "react";
import ProductsAddService from "../services/ProductsAddService";
import { ProductsNav } from "./ProductsNav";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import "./style-products.css";

export const ProductsAdd = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataa = { name, quantity, price, brand };
    const response = ProductsAddService(dataa);
    // console.log(response);
    setName("");
    setQuantity("");
    setPrice("");
    setBrand("");
  };

  

  const paperStyle = {
    height: "80vh",
    width: 300,
    padding: 20,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

    return (
      <>
           <ProductsNav/>
        <h1>Products Addition</h1>
        <div className="">
          <Grid>
            <Paper elevation={14} style={paperStyle}>
              <Grid align="center">
                <h2>Add Products</h2>
              </Grid>
              <TextField
                label="Name"
                placeholder="Enter Product Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Quantity"
                placeholder="Enter Quantity"
                fullWidth
                type="number"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                label="Price"
                placeholder="Enter Price"
                type="number"
                fullWidth
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                label="Brand"
                placeholder="Enter Brand"
                fullWidth
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={handleSubmit}
              >
                Add
              </Button>
            </Paper>
          </Grid>
        </div>
      </>
    );
  };
