import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CallsList from "./layouts/callsList";
import Login from "./layouts/login";
import TelephoneDirectory from "./layouts/telephoneDirectory";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/main";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";

const App = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route path="/login/:type?" component={Login} />
          <ProtectedRoute path="/callslist" component={CallsList} />
          <ProtectedRoute
            path="/telephonedirectory/:userId?/:edit?"
            component={TelephoneDirectory}
          />
          <Route path="/logout" component={LogOut} />
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
        <ToastContainer />
      </AuthProvider>
    </>
  );
};

export default App;
