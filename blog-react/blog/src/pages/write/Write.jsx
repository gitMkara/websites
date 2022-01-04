import "./write.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Write() {
  return (
    <div className="write">
    <img className="writeImg" src="../assets/postItem.jpg" />
      <form className="writeForm">
        <div className="top">
          <label htmlFor="fileInput">
            <AddCircleOutlineIcon fontSize="larger" />
          </label>
          <input type={"file"} id="fileInput" style={{ display: "none" }} />
          <input type={"text"} placeholder="Title" autoFocus={true} />
        </div>
        <div className="center">
          <textarea type="text" placeholder="Tell Your Story.."></textarea>
        </div>
        <div className="bottom">
        <button>Publish</button>
        </div>
      </form>
    </div>
  );
}
