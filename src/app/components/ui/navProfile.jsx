import React from "react";
import { Link } from "react-router-dom";
import avt from "../../img/avt.jpg";

function NavProfile({ currentUser }) {
  return (
    <div className="dropdown">
      <div className="dropdown d-flex align-items-center">
        <div className="me-2">
          Вход выполнен:<p>{currentUser.email}</p>
        </div>
        <div>
          <img
            src={avt}
            alt=""
            height="40"
            className="img-responsive rounded-circle m-2"
          />
          <button type="button" className="btn btn-outline-primary me-2">
            <Link to="/logout" className="nav-link">
              Выйти
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavProfile;
