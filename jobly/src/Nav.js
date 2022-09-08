import { NavLink } from "react-router-dom";
import "./Nav.css"
import Navbar from 'react-bootstrap/Navbar';
import userContext from './userContext';
import { useContext } from "react";


/** Navbar for links to different routes 
 * Props:
 * - logout: function for handling logout
*/
function Navigation({logout}) {
  const  {userData}  = useContext(userContext);
  
  let loggedIn = null;
  
  if(userData) {
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
        Log out {userData.username}
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