import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CallsList from "./callsList";
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
        <Route path="/" component={CallsList} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default NavBar;
