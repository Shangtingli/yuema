import React from 'react';
import '../styles/App.css';
import LoginEntry from "./loginflow/LoginEntry";
import RegistrationEntry from "./loginflow/RegistrationEntry";
import Home from "./home/Home";
import store from '../store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
//
// function PrivateRoute({ children, ...rest }) {
//     const isLoggedIn = store.getState().isLoggedIn;
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 isLoggedIn ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <LoginEntry/>
              </Route>
              <Route path="/register">
                  <RegistrationEntry/>
              </Route>
              <Route path="/home">
                  <Home/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
