import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/post/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="itemContainer">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
