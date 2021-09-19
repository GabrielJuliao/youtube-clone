import "./App.css";
import Card from "./components/Card";
import NavMenu from "./components/NavMenu";
import TopBar from "components/TobBar";
function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavMenu/>
      <section id="video-browser">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default App;
