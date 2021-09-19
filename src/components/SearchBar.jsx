import "../components/SearchBar.css";
import searchIcon from "../images/yt-search.svg";
import micIcon from "../images/yt-mic.svg"
export default function searchBar() {
  return (
    <div id="search-container">
        <input id="search-box" type="text" placeholder="Search"/>
      <button id="search-button">
        <img src={searchIcon} alt="" />
      </button>
      <div id="mic-icon-container">
        <img src={micIcon} alt="" width="24" height="24" />
      </div>
    </div>
  );
}
