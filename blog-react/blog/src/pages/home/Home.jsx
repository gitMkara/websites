import "./home.scss";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="itemContainer">
        <Post />
        <Sidebar />
      </div>
    </div>
  );
}
