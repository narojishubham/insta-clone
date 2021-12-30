import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./signup";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Signin from "./sigin";
import Navbar from "./Navbar";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* <Signup /> */}
            {/* <Signin /> */}
            <Navbar />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
