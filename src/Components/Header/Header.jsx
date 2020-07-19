import React, { Component } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: "",
      email: "",
      password: "",
    };
  }

  doLogin() {
    const { email, password } = this.state;
    axios
      .post(
        "http://127.0.0.1:8080/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        this.setState({ open: true, message: response.data.message });
        setTimeout(() => {
          this.setState({ open: false, message: "" });
        }, 6000);
      })
      .catch((error) => {
        if (error.response) {
          this.setState({ open: true, message: error.response.data.error });
        } else {
          this.setState({ open: true, message: "Request Failed" });
        }
        setTimeout(() => {
          this.setState({ open: false, message: "" });
        }, 6000);
      });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="Header">
        <div className="d-flex flex-row align-items-center justify-content-end">
          <div className="ml-1">
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              className="form-control form-control-sm"
              placeholder="Email Address"
            />
          </div>
          <div className="ml-1">
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className="form-control form-control-sm"
              placeholder="Password"
            />
          </div>
          <div className="ml-1">
            <button
              type="submit"
              disabled={this.state.email === "" || this.state.password === ""}
              className="btn btn-sm btn-success"
              onClick={this.doLogin}
            >
              LOGIN
            </button>
          </div>
        </div>
        <Snackbar
          autoHideDuration={6000}
          open={this.state.open}
          message={this.state.message}
        />
      </div>
    );
  }
}
