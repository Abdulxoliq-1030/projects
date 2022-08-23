import { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-success ">
        <div className="container justify-content-between">
          <ul className="nav mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to="/step-1"
              >
                Step-1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to="/step-2"
              >
                Step-2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to="/step-3"
              >
                Step-3
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
