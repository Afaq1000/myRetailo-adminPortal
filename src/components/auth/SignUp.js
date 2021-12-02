import React, { useState, useEffect } from "react";
import SignUpService from "../services/SignUpService";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import './style-auth.css';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
export const SignUp = () => {


    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [people, setPeople] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = { firstname,lastname,email, password };
      const response = SignUpService(data);
      // console.log(response);
      setFirstName('');
      setLastName('');
      setPassword('');
      setEmail('');
  
  
    };
  
    const paperStyle = {
      height: "80vh",
      width: 300,
      padding: 20,
      margin: "20px auto",
    };
    const avtarStyle = { backgroundColor: "green" };
    const btnstyle = { margin: "8px 0" };
  
    return (
       <>
        <div className='auth'>

            <div className="form">
            <Grid >
      <Paper elevation={14} style={paperStyle}>
        <Grid  align="center">
          <Avatar style={avtarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
          label="First Name"
          placeholder="Enter First Name"
          fullWidth
          required
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <TextField
          label="Last Name"
          placeholder="Enter Last Name"
          fullWidth
          required
          value={lastname}
          onChange={(e) => setLastName(e.target.value)} 
        />
        <TextField
          label="Email"
          placeholder="Enter Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick= {handleSubmit}
        >
          Sign up
        </Button>

      </Paper>
    </Grid>
                
            </div>
        </div>
        </>
    )
}
