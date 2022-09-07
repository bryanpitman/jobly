import {BrowserRouter} from 'react-router-dom'
import RoutesList from './RoutesList';
import Nav from "./Nav";

/** App for Jobly application */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <RoutesList/>
      </BrowserRouter>
    </div>
  );
}

export default App;