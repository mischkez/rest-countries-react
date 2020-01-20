import React from "react";
import IosMoon from "react-ionicons/lib/IosMoon";
import IosSunny from "react-ionicons/lib/IosSunny";
import { Link } from "react-router-dom";

export default function Navbar({ switchTheme, isDarkTheme }) {
  const text = isDarkTheme ? "Light Mode" : "Dark Mode";
  const icon = isDarkTheme ? (
    <IosSunny color="white"></IosSunny>
  ) : (
    <IosMoon></IosMoon>
  );

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbar-brand">
          Where in the world?
        </Link>
        <div className="theme-switcher" onClick={() => switchTheme()}>
          {icon}
          <span>{text}</span>
        </div>
      </div>
    </nav>
  );
}
