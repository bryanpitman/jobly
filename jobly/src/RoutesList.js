import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyDetails from "./CompanyDetails";
import Jobs from "./Jobs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";
import { useContext } from "react";

/** Function for handling all the routes of the Jobly app
 * Props:
 * - login: function for handling login
 * - signup: function for handling signup
 * - updateProfile: function for handling update profile
 */
function RoutesList({ login, signup, updateProfile }) {
  const { userData, isLoading } = useContext(userContext);
  let validRoutes = null;

  if (isLoading) {
    return (
      <div
        className="spinner-border"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      ></div>
    );
  }

  if (userData) {
    validRoutes = (
      <>
        <Route element={<Companies />} path="/companies" />
        <Route element={<CompanyDetails />} path="/companies/:handle" />
        <Route element={<Jobs />} path="/jobs" />
        <Route
          element={<ProfileForm updateProfile={updateProfile} />}
          path="/profile"
        />
      </>
    );
  } else {
    validRoutes = (
      <>
        <Route element={<LoginForm login={login} />} path="/login" />
        <Route element={<SignupForm signup={signup} />} path="/signup" />
        <Route element={<Navigate to="/login" />} path="/companies" />
        <Route element={<Navigate to="/login" />} path="/companies/:handle" />
        <Route element={<Navigate to="/login" />} path="/jobs" />
        <Route element={<Navigate to="/login" />} path="/profile" />
      </>
    );
  }
  // is there a way to put multiple paths for a single route?
  // {["/home", "/users", "/widgets"]} not working

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {validRoutes}
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;
