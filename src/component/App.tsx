import { createContext, useState } from "react";
import HomePage from "../Pages/HomePage";
import Signin from "./sigin";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./signup";
import "bootstrap/dist/css/bootstrap.min.css";
export const AuthenticationContext = createContext({} as any);

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {user ? (
            <>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/"></Route>
              <Route exact path="/home">
                <HomePage />
              </Route>
            </>
          ) : (
            <Redirect to="/signin" />
          )}
        </Switch>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
}

export default App;
