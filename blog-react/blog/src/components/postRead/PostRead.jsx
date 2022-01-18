import "./postRead.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PostRead() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [state, setState] = useState({});
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + path);
      setState(res.data);
    };
    fetchPost();
  }, [path]);

  return (
    <div className="postRead">
      <div className="itemContainer">
        <img src="../assets/postItem.jpg" alt="postImg" />
        <div className="title">
          <span>{state.title}</span>
          <div className="icons">
            <span>
              <EditIcon fontSize="large" />
            </span>
            <span>
              <DeleteForeverIcon fontSize="large" />
            </span>
          </div>
        </div>
        <div className="userInfo">
          <span>
            Author{" "}
            <Link className="routerLink" to={`/?user=${state.username}`}>
              <b>{state.username} </b>
            </Link>
          </span>
          <span>({new Date(state.createdAt).toUTCString()})</span>
        </div>
        <div className="text">
          <p>{state.desc}</p>
        </div>
      </div>
    </div>
  );
}
