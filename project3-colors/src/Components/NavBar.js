import React from "react";
import { Link, withRouter } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Colored ID
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
             
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Paletes" ? "active" : ""
                }`}
              >
               



                <Link class="nav-link" to="/Paletes">
                 Paletes
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Ranking" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Ranking">
                  Ranking
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/user" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/user">
                 User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(NavBar);