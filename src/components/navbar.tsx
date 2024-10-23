import React from "react";
import "./Navbar.css";

function Navbar({
  label,
  link,
  onClick,
}: {
  label?: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src="./logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href={link || "#"}>{label}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
