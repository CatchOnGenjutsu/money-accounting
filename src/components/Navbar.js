import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-block">
      <Link to={"/mainpage"} className="nav-el">
        <img className="icons" src="/icons/home.svg" />
      </Link>
      <Link to={"/history"} className="nav-el">
        <img className="icons" src="/icons/history.svg" />
      </Link>
      <Link to={"/spending-list"} className="nav-el">
        <img className="icons" src="/icons/card-list.svg" />
      </Link>
    </div>
  );
}

export default NavBar;
