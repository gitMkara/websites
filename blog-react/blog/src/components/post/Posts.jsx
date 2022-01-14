import PostItem from "./postItem/PostItem";
import "./posts.scss";

export default function Post({ posts }) {
  return (
    <div className="post">
      {posts.map((p) => 
        <PostItem post={p}/>
      )}
    </div>
  );
}
