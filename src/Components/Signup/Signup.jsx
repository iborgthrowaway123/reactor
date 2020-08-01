import React, { useState } from "react";
import Http from "../../Services/Http";
import Snackbar from "@material-ui/core/Snackbar";

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

  return (
  <div>
    <form column onSubmit={doSignup} className="d-flex justify-content-center">
      <label>
        Email:
        <input 
          type="email"                
          value={state.email}
          onChange={handleEmailChange}
          className="form-control-sm"
          placeholder="Email Address" />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={state.password}
          onChange={handlePasswordChange}
          className="form-control-sm"
          placeholder="Password"
        />
      </label>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
    <Snackbar
      autoHideDuration={6000}
      open={state.open}
      message={state.message}
    />
  </div>);
};

export default Signup;