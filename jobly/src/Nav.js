import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import Navbar from 'react-bootstrap/Navbar';


/** Navbar for links to different routes */
function Navigation() {
  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <NavLink className="home" to="/">
        Jobly
      </NavLink>
      <br />
      <NavLink className="companies" to="/companies">
        Companies
      </NavLink>
      <br />
      <NavLink className="jobs" to="/jobs">
        Jobs
      </NavLink>
      <br />
    </Navbar>
  );
}

export default Navigation;