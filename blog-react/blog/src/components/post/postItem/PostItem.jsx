import "./postitem.scss";

export default function PostItem() {
  return (
    <div className="postitem">
      <div className="postImg">
        <img src="../assets/postItem.jpg" alt="postImg" />
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">#Music</span>
          <span className="postCat">#Life</span>
        </div>
        <span className="postTitle">Post Title</span>
        <hr />
        <span className="postDate">2 Hours</span>
      </div>
      <p className="postDesc">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </p>
    </div>
  );
}
