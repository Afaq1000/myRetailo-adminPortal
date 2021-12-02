import React, { useState, useEffect } from "react";
import { ProductsNav } from "./ProductsNav";
import ProductDeleteService from "../services/ProductDeleteService";
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

export const ProductDelete = () => {
  const [productId, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataa = { productId };
    const response = ProductDeleteService(dataa);
    // console.log(response);
    setProductId("");
   
  };

  

  const paperStyle = {
    height: "50vh",
    width: 300,
    padding: 20,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
    return (
      <>
        <ProductsNav/>
        <h1>Products Deletion</h1>
        <div className="">
          <Grid>
            <Paper elevation={14} style={paperStyle}>
              <Grid align="center">
                <h2>Delete Product</h2>
              </Grid>
              <TextField
                label="Product Id"
                placeholder="Enter Product Id"
                fullWidth
                required
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
              
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={handleSubmit}
              >
                Delete
              </Button>
            </Paper>
          </Grid>
        </div>
      </>
    );
  };