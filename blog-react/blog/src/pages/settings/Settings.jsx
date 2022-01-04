import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function Settings() {
  return (
    <div className="settings">
      <div className="itemContainer">
        <div className="left">
          <div className="top">
            <h1>Update Your Account</h1>
            <h3>Delete Account!</h3>
          </div>
          <div className="center">
            <h3>Profile Picture</h3>
            <form>
              <div className="ppSetting">
                <img src="../../../assets/postItem.jpg" />
                <label htmlFor="inputFile">
                  <ContactPageIcon fontSize="larger" />
                </label>

                <input type="file" style={{ display: "none" }} id="inputFile" />
              </div>

                <div className="inputContainer">
                <label className="">User Name</label>
              <input type="input" />
              <label className="">E-mail</label>
              <input type="email" />
              <label className="">Password</label>
              <input type="password" />
                </div>
            </form>
          </div>
          <div className="bottom">
              <button>Update</button>
          </div>
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
