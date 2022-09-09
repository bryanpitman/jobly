import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesList from "./RoutesList";
import Navigation from "./Nav";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

/** App for Jobly application */
function App() {
  const [user, setUser] = useState({ userData: null, isLoading: true });

  const [token, setToken] = useState(localStorage.getItem('token'));

  async function login(formData) {
    const newToken = await JoblyApi.login(formData);
    setToken(newToken);
    localStorage.setItem('token', newToken);
  }

  async function signup(formData) {
    const newToken = await JoblyApi.signup(formData);
    console.log("signup token", newToken);
    setToken(newToken);
    localStorage.setItem('token', newToken);
  }

  async function updateProfile(formData) {
    const updatedUser = await JoblyApi.updateProfile(formData);
    setUser({ userData: updatedUser, isLoading: false });
  }

  function logout() {
    JoblyApi.token = null;
    setToken(null);
    localStorage.removeItem('token');
  }
  // what happens when someone logs out and it tries to decode null?
  // that's why we have the if(token) part

  useEffect(
    function updateUser() {
      async function getUserDetails() {
        if (token) {
          JoblyApi.token = token;
          const { username } = jwt_decode(token);
          let currUser = await JoblyApi.getUser(username); //should give user entire user object
          setUser({ userData: currUser, isLoading: false });
          // put this directly into userData instead of payload so we don't get iat
        } else {
          setUser({ userData: null, isLoading: false });
        }
      }
      getUserDetails();
    },
    [token]
  );
  // useEffect runs AFTER the first render!!!

  // userContext should just be about presentational information about user
  // for the functions (login, signup, updateProfile), we should prop drill them

  return (
    <div className="App">
      <userContext.Provider
        value={user}
      >
        <BrowserRouter>
          <Navigation logout={logout}/>
          <RoutesList login={login} signup={signup} updateProfile={updateProfile}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

// let payload = {
//   username: user.username,
//   isAdmin: user.isAdmin || false,
// };

export default App;

// Possible further study things:
// live search, pagination, testing with ajax and mocking :( should do this, custom hooks
// kinda repetitive: job applications, show list of companies applied to, add edit form for companies