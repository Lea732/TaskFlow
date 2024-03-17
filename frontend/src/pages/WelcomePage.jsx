import ApplicationName from "../components/ApplicationName";

import "../styles/welcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome_page">
      <ApplicationName />
      <img src="src/assets/homepage_image.png" alt="books with vase" />
      <div>
        <button type="button" className="login">
          Log In
        </button>
        <button type="button" className="register">
          Register
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
