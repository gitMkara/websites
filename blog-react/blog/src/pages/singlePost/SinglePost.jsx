import "./singlePost.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import PostRead from "../../components/postRead/PostRead";
export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="itemContainer">
        <div className="left">
        <PostRead />
        </div>
        <div className="right">
         <Sidebar /> 
        </div>
      </div>
    </div>
  );
}
