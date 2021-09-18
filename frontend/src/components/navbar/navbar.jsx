import React from "react";
import { Link, NavLink, Router } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/map" className="nav-link">
            Map
          </NavLink>
          <NavLink to="/missing" className="nav-link">
            Missing
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
