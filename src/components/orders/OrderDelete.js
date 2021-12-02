import React, { useState, useEffect } from "react";
import { OrdersNav } from "./OrdersNav";
import OrderDeleteService from "../services/OrderDeleteService";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import "./style-orders.css";

export const OrderDelete = () => {
  const [orderId, setOrderId] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataa = { orderId };
    const response = OrderDeleteService(dataa);
    // console.log(response);
setOrderId("");
   
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
        <OrdersNav/>
        <h1>Order Deletion</h1>
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
                value={orderId}
                onChange={(e) =>setOrderId(e.target.value)}
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
  }

