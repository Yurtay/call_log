import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h4> Канчуринское УПХГ</h4>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="callslog"
              >
                Журнал вызовов
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="telephonedirectory">
                Справочник
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="login">
                Вход
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
