import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import "./Header.css";
import Http from "../../Services/Http";

const Header = () => {
  const [state, setState] = useState({
    open: false,
    message: "",
    email: "",
    password: "",
  });

  const doLogin = () => {
    const { email, password } = state;
    const url = "http://127.0.0.1:8080/api/login";
    Http(url, "POST", { email, password })
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
    <div className="Header">
      <div className="d-flex flex-row align-items-center justify-content-end">
        <div className="ml-1">
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            className="form-control form-control-sm"
            placeholder="Email Address"
          />
        </div>
        <div className="ml-1">
          <input
            type="password"
            value={state.password}
            onChange={handlePasswordChange}
            className="form-control form-control-sm"
            placeholder="Password"
          />
        </div>
        <div className="ml-1">
          <button
            type="submit"
            disabled={state.email === "" || state.password === ""}
            className="btn btn-sm btn-success"
            onClick={doLogin}
          >
            LOGIN
          </button>
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

export default Header;
