import React from 'react';
import '../styles/App.css';
import LoginEntry from "./loginflow/LoginEntry";
import RegistrationEntry from "./loginflow/RegistrationEntry";
import Home from "./home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <LoginEntry/>
              </Route>
              <Route exact path="/register">
                  <RegistrationEntry/>
              </Route>
              <Route exact path="/home">
                  <Home/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
