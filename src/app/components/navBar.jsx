import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CallsList from "./layouts/callsList";
import Login from "./layouts/login";
import TelephoneDirectory from "./layouts/telephoneDirectory";
import NavMenu from "./navMenu";

const NavBar = () => {
  return (
    <>
      <NavMenu />
      <Switch>
        <Route
          path="/telephonedirectory/:userId?"
          component={TelephoneDirectory}
        />
        <Route path="/login" component={Login} />
        <Route path="/" component={CallsList} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default NavBar;
