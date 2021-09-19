import '../components/AccountTools.css';
import createVideoIcon from "../images/create-video.svg";
import appDw from "../images/app-dw.svg";
import notificationIcon from "../images/notification.svg";

export default function accountTools() {
  return (
    <div id="account-tools">
      <div className="account-tool">
        <img src={createVideoIcon} alt="" />
      </div>
      <div className="account-tool">
        <img src={appDw} alt="" />
      </div>
      <div className="account-tool">
        <img src={notificationIcon} alt="" />
      </div>

      <div className="account-tool">

        <div id="account-icon">
           <p>G</p>
        </div>

      </div>
    </div>
  );
}
