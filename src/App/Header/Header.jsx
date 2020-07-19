import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="d-flex flex-row align-items-center justify-content-end">
        <div className="ml-1">
          <input
            type="email"
            className="form-control form-control-sm"
            placeholder="Email Address"
          />
        </div>
        <div className="ml-1">
          <input
            type="password"
            className="form-control form-control-sm"
            placeholder="Password"
          />
        </div>
        <div className="ml-1">
          <button type="submit" className="btn btn-sm btn-success">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
