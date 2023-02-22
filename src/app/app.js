import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import CallsList from "./layouts/callsList";
// import Login from "./layouts/login";
import TelephoneDirectory from "./layouts/telephoneDirectory";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/main";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        {/* <Route path="/login/:type?" component={Login} /> */}
        {/* <Route
          path="/telephonedirectory/:userId?/:edit?"
          component={CallsList}
        /> */}
        <Route
          path="/telephonedirectory/:userId?/:edit?"
          component={TelephoneDirectory}
        />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </>
  );
};

export default App;
