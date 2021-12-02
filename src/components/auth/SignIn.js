import React, { useState, useEffect } from "react";
import SignInService from "../services/SignInService";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
import './style-auth.css';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


export const SignIn = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };
    const response = SignInService(data);
    // console.log(response);
    setPassword("");
    setEmail("");
  };


    const paperStyle={padding :20,height:'80vh',width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
       <>
        <div className='auth'>

            <div className="form">
        <Grid>
            <Paper elevation={14} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' value={email}
              onChange={(e) => setEmail(e.target.value)} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' value={password}
              onChange={(e) => setPassword(e.target.value)} fullWidth required/>
                
                <Button type='submit' onClick= {handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography > Do you have an account ?
                     <Link href="/SignUp" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
                
            </div>
        </div>
        </>
    )
}
