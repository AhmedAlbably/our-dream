import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <div className="links">
        <span className="icon">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <ul>
          <li>
            <NavLink to="/">
              Home
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About us
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">
              Services
              <span></span>
              <span></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact us
              <span></span>
              <span></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
