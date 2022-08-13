import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = ({ routes }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          React Route
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          {routes.map(({ title, path }) => (
            <li key={path} className="nav-item">
              <Link className="nav-link" to={path} children={title} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
