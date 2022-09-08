import {BrowserRouter} from 'react-router-dom'
import { useState, useEffect } from 'react';
import RoutesList from './RoutesList';
import Navigation from "./Nav";
import userContext from './userContext';
import JoblyApi from './api';
import jwt_decode from 'jwt-decode';

/** App for Jobly application */
function App() {
  const [user, setUser] = useState({userData: null});
  
  const [token, setToken] = useState(null);
  
  async function login(formData) {
    await JoblyApi.login(formData);
    setToken(JoblyApi.token);
  }
  
  async function signup(formData) {
    const newToken = await JoblyApi.signup(formData);
    console.log('signup token', newToken);
    setToken(newToken);
  }
  
  async function updateProfile(formData) {
    await JoblyApi.updateProfile(formData);
    setToken(JoblyApi.token);
  }
  
  function logout() {
   JoblyApi.token = null;
    setToken(JoblyApi.token);
  }
  // what happens when someone logs out and it tries to decode null?
  
  useEffect(function updateUser() {
    
    if(token) {
    const payload = jwt_decode(token);
    const {username, isAdmin} = payload;
    setUser({userData: {username, isAdmin}});
    // put this directly into userData instead of payload so we don't get iat
    }
    else {
      setUser({userData: null});
    }
    
  }, [token])
  
  return (
    <div className="App">
      <userContext.Provider value={{user, login, signup, updateProfile, logout}}>
      <BrowserRouter>
        <Navigation/>
        <RoutesList/>
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