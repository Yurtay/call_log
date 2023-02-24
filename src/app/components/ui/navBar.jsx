import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import NavProfile from "./navProfile";

const NavBar = () => {
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser);
  return (
    <nav className="navbar bg-light mb-3">
      <div className="container-fluid">
        <h4> Канчуринское УПХГ</h4>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/callslist">
              Журнал вызовов
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/telephonedirectory">
              Справочник
            </Link>
          </li>
        </ul>
        {currentUser ? (
          <NavProfile />
        ) : (
          <Link className="nav-link" to="/login">
            Вход
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
