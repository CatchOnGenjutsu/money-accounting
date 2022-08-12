import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-block">
      <Link to={"/main-page"} className="nav-el">
        <img alt="home" className="icons" src="/icons/home.svg" />
      </Link>
      <Link to={"/statistics"} className="nav-el">
        <img alt="statistics" className="icons" src="/icons/statistics.svg" />
      </Link>
      <Link to={"/spending-list"} className="nav-el">
        <img alt="card-list" className="icons" src="/icons/card-list.svg" />
      </Link>
    </div>
  );
}

export default NavBar;
