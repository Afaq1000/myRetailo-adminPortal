import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductsAddService from "../services/ProductsAddService";
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

  const Wrapper= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left= styled.div`
margin-left:20px;
`; 

const Right= styled.div`
margin-right:20px;
`;

  const paperStyle = {
    height: "60vh",
    width: 300,
    padding: 20,
    margin: "20px auto",
  };
  const [flag, setFlag] = useState(false);

  const removeToken = () => {
    localStorage.removeItem("x-auth-token");
    setFlag(false);
  };

  useEffect(() => {
    if (localStorage.getItem("x-auth-token") != null) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, []);

  const btnstyle = { margin: "8px 0" };

  if (!flag) {
    return (
      <>
        <h1>Not Signed In</h1>
      </>
    );
  } else if (flag) {
    return (
      <>
         
      
        <Wrapper>
        <Left>
        <h1>Products Addition</h1>
        </Left>
        <Right>
           <Box textAlign="center">
          <Button
            type="button"
            onClick={removeToken}
            color="primary"
            variant="contained"
            style={btnstyle}
          >
            Sign Out
          </Button>
        </Box>
        </Right>

        </Wrapper>
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
}
