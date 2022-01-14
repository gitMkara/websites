import "./postRead.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function PostRead() {
  return (
    <div className="postRead">
      <div className="itemContainer">
        <img src="../assets/postItem.jpg" alt="postImg" />
        <div className="title">
          <span>Post Title</span>
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
            Author <b>murat KARA </b>
          </span>
          <span>(1 Hour)</span>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue
            ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in
            odio. Praesent convallis urna a lacus interdum ut hendrerit risus
            congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
            ac. In at libero sed nunc venenatis imperdiet sed ornare turpis.
            Donec vitae dui eget tellus gravida venenatis. Integer fringilla
            congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            Cras ac leo purus. Mauris quis diam velit.
          </p>
        </div>
      </div>
    </div>
  );
}