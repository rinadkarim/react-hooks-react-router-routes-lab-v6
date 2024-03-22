import { NavLink } from "react-router-dom";
import "./NavBar.css";
import React from "react";

function NavBar() {
  return (
<nav className="navbar">
   <NavLink exact to="/" activeclassname="active">            Home</NavLink>
   <NavLink to="/directors" activeclassname="active">Directors</NavLink>
   <NavLink to="/actors" activeclassname="active">Actors</NavLink>
</nav>
);
}
  
export default NavBar;
