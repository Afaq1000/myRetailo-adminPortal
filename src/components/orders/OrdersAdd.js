import React, { useState, useEffect } from "react";
import OrdersAddService from "../services/OrdersAddService";
import styled from "styled-components";

import { Grid, Paper, TextField, Button, Box, Link } from "@material-ui/core";
import "./style-orders.css";

export const OrdersAdd = () => {
  const [delivery_date, setDeliveryDate] = useState("");
  const [placed_at, setPlacedAt] = useState("");
  const [quantity, setQuantity] = useState("");
  const [order_type, setOrderType] = useState("");
  const [product_id, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataa = {
      delivery_date,
      placed_at,
      quantity,
      order_type,
      product_id,
    };

    const response = OrdersAddService(dataa);
    // console.log(dataa);
    // console.log(response);
    setDeliveryDate("");
    setPlacedAt("");
    setQuantity("");
    setOrderType("");
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
    height: "70vh",
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
        <h1>Order Addition</h1>
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
                <h2>Add Orders</h2>
              </Grid>
              <TextField
                label="Delivery Date"
                placeholder="Enter Date of delivery"
                fullWidth
                required
                //   type="date"
                value={delivery_date}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
              <TextField
                label="Placed At"
                placeholder="Enter Date of order placing"
                fullWidth
                //   type="date"
                required
                value={placed_at}
                onChange={(e) => setPlacedAt(e.target.value)}
              />
              <TextField
                label="Quantity"
                placeholder="Enter Quantity"
                type="number"
                fullWidth
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                label="Order Type"
                placeholder="Enter Type of Order"
                fullWidth
                required
                value={order_type}
                onChange={(e) => setOrderType(e.target.value)}
              />

              <TextField
                label="Product Id"
                placeholder="Enter Product Id"
                fullWidth
                required
                value={product_id}
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
                Add
              </Button>
            </Paper>
          </Grid>
        </div>
      </>
    );
  }
};
