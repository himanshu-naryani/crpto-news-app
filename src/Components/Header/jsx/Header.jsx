import * as React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <p>Crypto News</p>
      </Link>
    </div>
  );
}

export default Header;
