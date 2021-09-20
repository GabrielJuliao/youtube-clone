import "../components/TopBar.css";

import yt_logo from '../images/logo.svg'
import SearchBar from "../components/SearchBar";
import AccountTools from "../components/AccountTools";
export default function topBar() {
  return (
    <header id="top-bar">
      <img id="yt-logo" src={yt_logo} alt="" />
      <SearchBar/>
      <AccountTools/>
    </header>
  );
}
