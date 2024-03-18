import { Link } from "react-router-dom";

import ApplicationName from "../components/ApplicationName";

import "../styles/welcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome_page">
      <ApplicationName />
      <img src="src/assets/homepage_image.png" alt="books with vase" />
      <div>
        <Link to="/login">
          <button type="button" className="login">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="register">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
