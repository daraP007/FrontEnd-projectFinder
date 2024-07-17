import style from "./Form.module.css";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const user = [email, password];

    console.log(user.email);
    console.log(user.password);

    try {
      const response = await fetch("http://localhost:8080/user/retrieve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(user);

      if (response.ok) {
        alert(user);
        alert("User is login");
      } else {
        alert("failed to login");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className={style.loginContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={style.input}>
            <input
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
          </div>
          <div className={style.input}>
            <input
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.loginButton}>
            <button type="submit">Login</button>
          </div>
          <div>
            <span className={style.signUp}>
              Don't have an account? <a href="/signup">Sign Up</a>
            </span>
            <a className={style.password} href="">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
