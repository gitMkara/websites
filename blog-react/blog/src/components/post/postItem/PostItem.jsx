import "./postitem.scss";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className="postitem">
      <div className="postImg">
        <img src={PF + post.photo} alt="postImg" />
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">#Music</span>
          <span className="postCat">#Life</span>
        </div>
        <Link to={`/post/${post._id}`} className="routerLink">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toUTCString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
