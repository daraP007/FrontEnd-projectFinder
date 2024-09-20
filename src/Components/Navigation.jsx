import style from "../styles/Components/Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

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
          {user ? (
            <>
              <li>Hello,{user.userName}</li>
              <li onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
}

export default Navigation;
