import "./App.css";
import Card from "./components/Card";
import NavMenu from "./components/NavMenu";
import TopBar from "./components/TobBar";
import { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([
    {
      thumbnail: "https://picsum.photos/310/170?random=1",
      avatar: "https://picsum.photos/36/36?random=2",
      duration: "1:30",
      title: "Sample Video Title",
      channelName: "Channel Name",
      metadata: "8 mi views • 1 day ago",
    },
  ]);

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
