import React from "react";
import { Route } from "react-router-dom";
import CallsList from "./callsList";
import TelephoneDirectory from "./telephoneDirectory";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h4> Журнал звонков Канчуринского УПХГ</h4>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="callslog"
                >
                  Главная
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="telephonedirectory">
                  Справочник
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Выбрать год
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Route path="/callslog" component={CallsList} />
      <Route path="/telephonedirectory" component={TelephoneDirectory} />
    </>
  );
};

export default NavBar;
