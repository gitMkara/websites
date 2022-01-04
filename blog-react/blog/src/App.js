import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  const isUserOnline = false;
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={isUserOnline ? <Home /> : <Login />} />
        </Routes>
        <Routes>
          <Route
            path="/register"
            element={isUserOnline ? <Home /> : <Register />}
          />
        </Routes>
        <Routes>
          <Route
            path="/settings"
            element={isUserOnline ? <Settings /> : <Register />}
          />
        </Routes>
        <Routes>
          <Route
            path="/post/:postId"
            element={isUserOnline ? <SinglePost /> : <Register />}
          />
        </Routes>
        <Routes>
          <Route
            path="/write"
            element={isUserOnline ? <Write /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
