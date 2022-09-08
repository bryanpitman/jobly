import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import RoutesList from "./RoutesList";
import Navigation from "./Nav";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

/** App for Jobly application */
function App() {
  const [user, setUser] = useState({ userData: null });

  const [token, setToken] = useState(null);

  async function login(formData) {
    const newToken = await JoblyApi.login(formData);
    setToken(newToken);
  }

  async function signup(formData) {
    const newToken = await JoblyApi.signup(formData);
    console.log("signup token", newToken);
    setToken(newToken);
  }

  async function updateProfile(formData) {
    const updatedUser = await JoblyApi.updateProfile(formData);
    setUser({ userData: updatedUser });
  }

  function logout() {
    JoblyApi.token = null;
    setToken(JoblyApi.token);
  }
  // what happens when someone logs out and it tries to decode null?

  useEffect(
    function updateUser() {
      async function getUserDetails() {
        if (token) {
          JoblyApi.token = token;
          const { username } = jwt_decode(token);
          console.log("username: ", username);
          let currUser = await JoblyApi.getUser(username); //should give use entire user object
          setUser({ userData: currUser });
          console.log("user: ", user);
          // put this directly into userData instead of payload so we don't get iat
        } else {
          setUser({ userData: null });
        }
      }
      getUserDetails();
    },
    [token]
  );

  return (
    <div className="App">
      <userContext.Provider
        value={{ user, login, signup, updateProfile, logout }}
      >
        <BrowserRouter>
          <Navigation />
          <RoutesList />
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
