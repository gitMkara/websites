import "./topbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Topbar() {
  const isUserOnline = false;
  return (
    <div className="topBar">
      <div className="left">
        <span>
          <TwitterIcon fontSize="large" />
        </span>
        <span>
          <InstagramIcon fontSize="large" />
        </span>
        <span>
          <GitHubIcon fontSize="large" />
        </span>
      </div>
      <div className="center">
        <ul className="topbarList">
          <li className="listItem">
            <Link className="routerLink" to="/">
              HOME
            </Link>
          </li>
          <li className="listItem">
            <Link className="routerLink" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="listItem">
            <Link className="routerLink" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="listItem">
            {" "}
            <Link className="routerLink" to="/contact">
              WRITE
            </Link>
          </li>
          <li className="listItem">{isUserOnline && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="right">
        {isUserOnline ? (
          <img src="../assets/myPhoto.png" alt="pp" />
        ) : (
          <div>
            <ul className="topbarList">
              <li className="listItem">
                <Link className="routerLink" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="listItem">
                <Link className="routerLink" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </div>
        )}
        <span>
          <SearchIcon fontSize="large" />
        </span>
      </div>
    </div>
  );
}
