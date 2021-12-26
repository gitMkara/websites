import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import "./app.scss";
import React, { useState } from 'react'


function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
