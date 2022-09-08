import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import Jobs from './Jobs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';

/** Function for handling all the routes of the Jobly app */
function RoutesList() {
  return (
    <Routes>
      <Route element= { <Home />} path="/" />
      <Route element= { <Companies/>} path="/companies" />
      <Route element= { <CompanyDetails/>} path="/companies/:handle" />
      <Route element= { <Jobs />} path="/jobs" />
      <Route element= { <LoginForm />} path="/login" />
      <Route element= { <SignupForm />} path="/signup" />
      <Route element= { <ProfileForm />} path="/profile" />
      <Route element= { <Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;