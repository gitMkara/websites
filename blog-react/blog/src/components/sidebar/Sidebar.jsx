import "./sidebar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    fetchCat();
  }, []);

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
          {cat.map((c) => (
            <Link className="routerLink" to={`/?cat=${c.name}`}>
              <li>{c.name}</li>
            </Link>
          ))}
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
