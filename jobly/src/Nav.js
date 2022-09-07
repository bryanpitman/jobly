import React from "react";
import { NavLink } from "react-router-dom";

/** Navbar for links to different routes */
function Nav() {
  return (
    <nav className="NavBar">
      <NavLink to="/"
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue"
        })}>
        Jobly
      </NavLink>
      <br />
      <NavLink to="/companies"
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue"
        })}>
        Companies
      </NavLink>
      <br />
      <NavLink to="/jobs"
        style={({ isActive }) => ({
          color: isActive ? "green" : "blue"
        })}>
        Jobs
      </NavLink>
      <br />
    </nav>
  );
}

export default Nav;