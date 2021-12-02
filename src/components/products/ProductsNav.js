import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

export const ProductsNav = () => {
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
        <nav className="navigation">
          <ul className="container">
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/productAdd">Add Product</Link>
            </li>
            <li>
              <Link to="/productDelete">Delete Product</Link>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </>
    );
  }
};
