import { Link } from "react-router-dom";

import ApplicationName from "../components/ApplicationName";

import "../styles/register.css";

function Register() {
  return (
    <div className="register">
      <ApplicationName />
      <h2>Register</h2>
      <div>
        <form>
          <div>
            <label htmlFor="firstname">Firstname :</label>
            <input
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Enter your firstname"
            />
          </div>
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
          <div>
            <label htmlFor="confirm_password">Confirm password :</label>
            <input
              name="confirm_password"
              id="confirm_password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <Link to="/todolist">
            <button type="button">Register</button>
          </Link>

          <p className="desktop_register">
            Don't have an account ?&nbsp;
            <Link to="/login">Log In</Link>
          </p>
        </form>

        <img src="src/assets/register_desktop.png" alt="A vase" />
      </div>
    </div>
  );
}

export default Register;
