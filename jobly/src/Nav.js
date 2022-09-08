import { NavLink } from "react-router-dom";
import "./Nav.css"
import Navbar from 'react-bootstrap/Navbar';
import userContext from './userContext';
import { useContext } from "react";


/** Navbar for links to different routes */
function Navigation() {
  const { user, logout } = useContext(userContext);
  
  let loggedIn = null;
  
  if(user.userData) {
    loggedIn = (
      <><NavLink className="companies" to="/companies">
        Companies
      </NavLink>
      <br />
      <NavLink className="jobs" to="/jobs">
        Jobs
      </NavLink>
      <br />
      <NavLink className="profile" to="/profile">
        Profile
      </NavLink>
      <br />
      <NavLink className="logout" onClick={logout} to="/">
        Log out {user.userData.username}
      </NavLink>
      <br />
      </>
    )
  }
  else {
    loggedIn = (
      <>
        <NavLink className="login" to="/login">
        Login
      </NavLink>
      <br />
      <NavLink className="signup" to="/signup">
        Signup
      </NavLink>
      <br />
      </>
    )
  }

  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <NavLink className="home" to="/">
        Jobly
      </NavLink>
      <br />
      {loggedIn}
    </Navbar>
  );
}

// need some functionality for logout navlink to empty user state in app

export default Navigation;