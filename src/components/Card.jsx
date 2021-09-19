import '../components/Card.css';
export default function card(props) {
  return (
    <div className="video-card">
      <img className="thumbnail" src="https://picsum.photos/320/180" width="270" height="150" alt="" />
      <div className="video-info">
        <div className="card-info-container-l">
          <img className="channel-profile-pic" src="https://picsum.photos/36/36" alt="" />
        </div>
        <div className="card-info-container-r">
            <div><p className="video-card-title">Sample Video Title</p></div>
            <div><a href="change-me">Channel Name</a>&#xf058;</div>
            <div className="video-card-metadata">
                <span>845 mi views • 1 day ago </span>
            </div>
        </div>
      </div>
    </div>
  );
}
