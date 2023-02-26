import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRegUser } from "../../store/regUser";
import NavProfile from "./navProfile";
import phg from "../../img/phg.png";
import DateNow from "../../utils/dateNow";

const NavBar = () => {
  const currentUser = useSelector(getRegUser());

  return (
    <nav className="navbar navbar-light bg-light m-3">
      <div className="container-fluid">
        <img src={phg} alt="" className="d-inline-block align-text-top" />

        {currentUser ? (
          <ul className="nav">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-primary me-2">
                <Link className="nav-link text-dark" aria-current="page" to="/">
                  Главная
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-primary me-2">
                <Link
                  className="nav-link text-dark"
                  aria-current="page"
                  to="/callslist"
                >
                  Журнал вызовов
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-primary me-2">
                <Link className="nav-link text-dark" to="/telephonedirectory">
                  Справочник
                </Link>
              </button>
            </li>
          </ul>
        ) : (
          <h1 className="text-primary">
            <DateNow />
          </h1>
        )}
        {currentUser ? (
          <NavProfile currentUser={currentUser} />
        ) : (
          <button type="button" className="btn btn-outline-primary me-2">
            <Link className="nav-link text-dark" to="/login">
              Войти
            </Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
