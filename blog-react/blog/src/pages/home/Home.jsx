import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/post/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="itemContainer">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
