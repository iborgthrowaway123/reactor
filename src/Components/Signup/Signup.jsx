import React, { useState } from "react";
import Http from "../../Services/Http";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
    <form column onSubmit={doSignup} className="d-flex justify-content-center">
      
      
      <TextField 
        id="standard-basic"
        type="email" 
        value={state.email}
        onChange={handleEmailChange}
        className="form-control-sm" 
        label="Email"/>
      
      <TextField 
        id="standard-basic" 
        type="password"
        value={state.password}
        onChange={handlePasswordChange}
        className="form-control-sm"
        label="Password" />
      <button type="submit" class="btn btn-primary align-items-center">Register</button>
    </form>
    </div>
    </div>
    <Snackbar
      autoHideDuration={6000}
      open={state.open}
      message={state.message}
    />
  </div>);
};

export default Signup;