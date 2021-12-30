import "./sidebar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="itemContainer">
        <h4>ABOUT ME</h4>
        <img src="../assets/sidebarImg.jpg" />
        <p>
          <span></span>Emmet is great for that. With it installed in the code
          editor you are using, you can type “lorem” and then tab and it will
          expand into a paragraph of Lorem Ipsum placeholder text. But it can do
          more!
        </p>
        <h4>CATEGORIES</h4>
        <ul>
          <li>Life</li>
          <li>Music</li>
          <li>Tech</li>
          <li>Trekking</li>
        </ul>
        <h4>FOLLOW</h4>
        <div className="socialMedias">
          <span>
            <TwitterIcon fontSize="medium" />
          </span>
          <span>
            <InstagramIcon fontSize="medium" />
          </span>
          <span>
            <GitHubIcon fontSize="medium" />
          </span>
        </div>
      </div>
    </div>
  );
}
