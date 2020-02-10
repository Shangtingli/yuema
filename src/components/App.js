import React from 'react';
import '../styles/App.css';
import LoginForm from "./loginflow/LoginForm";
import RegistrationForm from "./loginflow/RegistrationForm";
import CharacteristicsForm from './loginflow/CharacteristicsForm';
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
              <Route exact path="/characteristic">
                  <CharacteristicsForm/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
