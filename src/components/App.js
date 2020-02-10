import React from 'react';
import '../styles/App.css';
import LoginForm from "./loginflow/LoginForm";
import RegistrationForm from "./loginflow/RegistrationForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <LoginForm/>
              </Route>
              <Route exact path="/register">
                  <RegistrationForm/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
