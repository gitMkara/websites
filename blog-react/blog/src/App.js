import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import SinglePost from './pages/singlePost/SinglePost';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
    const { user } = useContext(Context);
    return (
        <div className='App'>
            <Router>
                <Topbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Routes>
                    <Route
                        path='/login'
                        element={user ? <Home /> : <Login />}
                    />
                </Routes>
                <Routes>
                    <Route
                        path='/register'
                        element={user ? <Home /> : <Register />}
                    />
                </Routes>
                <Routes>
                    <Route
                        path='/settings'
                        element={user ? <Settings /> : <Register />}
                    />
                </Routes>
                <Routes>
                    <Route
                        path='/post/:postId'
                        element={<SinglePost />}
                    />
                </Routes>
                <Routes>
                    <Route
                        path='/write'
                        element={user ? <Write /> : <Register />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
