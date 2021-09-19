import "../components/NavMenu.css";
import homeIcon from "../images/home.svg";
import exploreIcon from "../images/explore.svg";
import subsIcon from "../images/subscriptions.svg";
import libraryIcon from "../images/library.svg";
export default function navMenu() {
  return (
    <section id="nav-menu">
      <div id="menu-container">
        <div className="menu-btn">
          <img src={homeIcon} alt="" />
          <p>Home</p>
        </div>
        <div className="menu-btn">
          <img src={exploreIcon} alt="" />
          <p>Explore</p>
        </div>
        <div className="menu-btn">
          <img src={subsIcon} alt="" />
          <p>Subscriptions</p>
        </div>
        <div className="menu-btn">
          <img src={libraryIcon} alt="" />
          <p>Library</p>
        </div>
      </div>
    </section>
  );
}
