import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import Jobs from './Jobs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import userContext from './userContext';
import { useContext } from "react";

/** Function for handling all the routes of the Jobly app */
function RoutesList() {
  
  const { user } = useContext(userContext);
  let loggedIn = null;
  
  if(user.userData) {
    loggedIn = (
      <>
      <Route element= { <Companies/>} path="/companies" />
      <Route element= { <CompanyDetails/>} path="/companies/:handle" />
      <Route element= { <Jobs />} path="/jobs" />
      <Route element= { <ProfileForm />} path="/profile" />
      </>
    )
  }
  
  else {
    loggedIn = (
      <>
      <Route element= { <LoginForm />} path="/login" />
      <Route element= { <SignupForm />} path="/signup" />
      <Route element= { <Navigate to="/login" />} path="/companies" />
      <Route element= { <Navigate to="/login" />} path="/companies/:handle" />
      <Route element= { <Navigate to="/login" />} path="/jobs" />
      <Route element= { <Navigate to="/login" />} path="/profile" />
      </>
    )
  }
  // is there a way to put multiple paths for a single route?
  // {["/home", "/users", "/widgets"]} not working
  
  return (
    <Routes>
      <Route element= { <Home />} path="/" />
      {loggedIn}
      <Route element= { <Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;