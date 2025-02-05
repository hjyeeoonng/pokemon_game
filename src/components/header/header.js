import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header(props) {

  const pathWithoutSlash = props.currentPath.slice(1);
  const formattedPath = pathWithoutSlash.replace(/_/g, ' ');

  return (
    <div className="header">
      <div className="pagename">{formattedPath}</div>
      <div className="nav">
        <Link to="/Randering">Randering</Link>
        <Link to="/Proposal">Report</Link>
        <Link to="/About_Us">About Us</Link>
      </div>
      <img
        src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w512"
        className="header_logo"
        alt="logo"
      />
    </div>
  );
}

export default Header;
