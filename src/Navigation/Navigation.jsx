import style from "./Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className={style.nav}>
        <p className={style.name}>Phay Group Project</p>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LFG">LFG</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Navigation;
