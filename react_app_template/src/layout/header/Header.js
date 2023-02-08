import React from "react";
import { NavLink } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";

function Header() {
  console.log("Heater");
  return (
    <header className="header-area">
      {/* header */}
      <div className="left">
        <a href="Javascript:void(0)">
          <i className="fa fa-search" aria-hidden="true" />
        </a>
      </div>
      <div className="right">
        <a href="Javascript:void(0)">
          <i className="fa fa-user" aria-hidden="true" />
        </a>
      </div>
      <div className="container">
        <div className="row d_flex">
          <div className="col-sm-3 logo_sm">
            <div className="logo">
              <a href="index.html" />
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a className="active" href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="action.html">take action</a>
                  </li>
                  <li>
                    <a href="index.html" className="logo_midle">
                      covido
                    </a>
                  </li>
                  <li>
                    <a href="news.html">news</a>
                  </li>
                  <li>
                    <a href="doctores.html">doctores</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact </a>
                  </li>
                </ul>
                <button className="nav-toggler">
                  <span />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
    </header>
  );
}

export default Header;
