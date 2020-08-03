import React, { useState } from "react";
import Http from "../../Services/Http";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/box';

const Signup = () => {
  const [state, setState] = useState({
    open: false,
    email: "",
    password: "",
  });

  const doSignup = (event) => {
    event.preventDefault();
    const { email, password } = state;
    const url = "http://127.0.0.1:8080/api/users";
    Http.post(url, { email, password })
      .then((response) => {
        setState({ ...state, open: true, message: response.message });
        setTimeout(() => {
          setState({ ...state, open: false, message: "" });
        }, 6000);
      })
      .catch((error) => {
        setState({ ...state, open: true, message: error.message });
        setTimeout(() => {
          setState({ ...state, open: false, message: "" });
        }, 6000);
      });
  };

  const handleEmailChange = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setState({ ...state, password: event.target.value });
  };

  const mystyle = {
    backgroundColor: "#eeeeee",
    padding: 20,
    margin: 107,
  };

  return (
<div className="d-flex flex-column align-items-center justify-content-center">
   <div className="card" style={mystyle}>
      <div className="card-body">
         <h5>Register</h5>
         <Grid container direction ={"column"} spacing={5}>
            <Grid item>
               <div>
                  <TextField 
                     id="standard-basic"
                     type="email" 
                     value={state.email}
                     onChange={handleEmailChange}
                     className="form-control-sm" 
                     label="Email"/>
               </div>
            </Grid>
            <Grid item>
               <div>
                  <TextField 
                     id="standard-basic" 
                     type="password"
                     value={state.password}
                     onChange={handlePasswordChange}
                     className="form-control-sm"
                     label="Password" />
               </div>
            </Grid>          
            <Grid item>
            <Box
            display="flex" 
            alignItems="center"
            justifyContent="center">
              <button type="submit" class="btn btn-primary">Signup</button>
          </Box>
            </Grid>    
         </Grid>

      </div>
   </div>
   <Snackbar
      autoHideDuration={6000}
      open={state.open}
      message={state.message}
      />
</div>
);
};

export default Signup;