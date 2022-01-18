import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/post/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
console.log(search);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    };
    fetchPost();
  }, [search]);

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
