import "./App.css";
import Card from "./components/Card";
import NavMenu from "./components/NavMenu";
import TopBar from "./components/TobBar";
import { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    fetch('/mock-api.json')
    .then(response => response.json())
    .then(data => setVideos(data));
  },[]);

  return (
    <div className="App">
      <TopBar />
      <NavMenu />
      <section id="video-browser">
        {videos.map((video)=> <Card video={video}/>)}
      </section>
    </div>
  );
}

export default App;
