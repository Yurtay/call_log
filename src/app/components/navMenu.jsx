import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h4> Журнал звонков Канчуринского УПХГ</h4>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="callslog"
              >
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="telephonedirectory">
                Справочник
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">
                Выбрать год
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
