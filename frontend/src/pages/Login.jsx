import { Link } from "react-router-dom";

import ApplicationName from "../components/ApplicationName";

import "../styles/login.css";

function Login() {
  return (
    <div className="login">
      <ApplicationName />
      <h2>Log in</h2>
      <div>
        <form>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <Link to="/todolist">
            <button type="button">Log in</button>
          </Link>

          <p className="desktop_register">
            Don't have an account ?&nbsp;
            <Link to="/register">Register</Link>
          </p>
        </form>

        <img
          src="src/assets/register_desktop.png"
          alt="person pouring salt on a dish"
        />
      </div>
    </div>
  );
}

export default Login;
