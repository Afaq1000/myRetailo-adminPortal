import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    height: "50vh",
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
        <h1>Products Deletion</h1>
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
};