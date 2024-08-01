import style from "./Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const token = sessionStorage.getItem('token');
  const member = JSON.parse(sessionStorage.getItem('member'));
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
          {token ? (
          <>
            <li>
              <Link to="/profile">Profile</Link> {/* Example profile link */}
            </li>
            <li>
              <button onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('member');
                window.location.reload(); // Or use a navigation hook to redirect
              }}>Logout</button>
            </li>
            <li>
              <span>Hi {member?.firstName}</span> {/* Display user's first name */}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ol>
    </nav>
    </>
  );
}

export default Navigation;
