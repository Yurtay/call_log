import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CallsList from "./components/layouts/callsList";
import Login from "./components/layouts/login";
import TelephoneDirectory from "./components/layouts/telephoneDirectory";
import NavBar from "./components/ui/navBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route
          path="/telephonedirectory/:userId?"
          component={TelephoneDirectory}
        />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" component={CallsList} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
