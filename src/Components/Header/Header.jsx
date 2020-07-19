import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import "./Header.css";

const Header = () => {
  const [state, updateState] = useState({
    open: false,
    message: "",
    email: "",
    password: "",
  });

  const doLogin = () => {
    const { email, password } = state;
    const url = "http://127.0.0.1:8080/api/login";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ email, password }),
    };
    fetch(url, options)
      .then((response) => {
        updateState({ ...state, open: true, message: response.data.message });
        setTimeout(() => {
          updateState({ ...state, open: false, message: "" });
        }, 6000);
      })
      .catch((error) => {
        if (error.response) {
          updateState({
            ...state,
            open: true,
            message: error.response.data.error,
          });
        } else {
          updateState({ ...state, open: true, message: "Request Failed" });
        }
        setTimeout(() => {
          updateState({ ...state, open: false, message: "" });
        }, 6000);
      });
  };

  const handleEmailChange = (event) => {
    updateState({ ...state, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    updateState({ ...state, password: event.target.value });
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
