import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return <nav className="navbar">
    <div className="logo">LOGO</div>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About us</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      <li><NavLink to="/contact">Contact us</NavLink></li>
    </ul>
  </nav>;
}

export default NavBar;
