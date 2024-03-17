import ApplicationName from "../components/ApplicationName";
import ChecklistTitle from "../components/ChecklistTitle";

import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <ApplicationName />
      <ChecklistTitle />
      <img
        src="https://source.unsplash.com/random/390×250/?landscape"
        alt="random landscape"
      />
    </div>
  );
}

export default Home;
