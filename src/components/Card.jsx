import "../components/Card.css";

export default function card(props) {
  const video = props.video;
  return (
    <div className="video-card">
      <div className="video-preview">
        <img
          className="thumbnail"
          src={video.thumbnail}
          width="310"
          height="170"
          alt=""
        />
        <p className="video-duration">{video.duration}</p>
      </div>
      <div className="video-info">
        <div className="card-info-container-l">
          <img className="channel-profile-pic" src={video.avatar} alt="" />
        </div>
        <div className="card-info-container-r">
          <div>
            <p className="video-card-title">{video.title}</p>
          </div>
          <div>
            <a href="change-me">{video.channelName}</a>
          </div>
          <div className="video-card-metadata">
            <span>{video.metadata}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
