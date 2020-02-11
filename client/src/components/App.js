import React from 'react';
import '../styles/App.css';
import LoginEntry from "./loginflow/LoginEntry";
import RegistrationEntry from "./loginflow/RegistrationEntry";
import Home from "./home/Home";
import store from '../store';
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const history = createBrowserHistory();
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" history={history}>
                  <LoginEntry/>
              </Route>
              <Route path="/register" history={history}>
                  <RegistrationEntry/>
              </Route>
              <Route path="/home" history={history}>
                  <Home/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
