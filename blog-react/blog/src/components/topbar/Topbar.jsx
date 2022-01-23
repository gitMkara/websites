import './topbar.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function Topbar() {
    const { user, dispatch } = useContext(Context);

    const PF = 'http://localhost:5000/images/';
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    };
    return (
        <div className='topBar'>
            <div className='left'>
                <span>
                    <TwitterIcon fontSize='large' />
                </span>
                <span>
                    <InstagramIcon fontSize='large' />
                </span>
                <span>
                    <GitHubIcon fontSize='large' />
                </span>
            </div>
            <div className='center'>
                <ul className='topbarList'>
                    <li className='listItem'>
                        <Link className='routerLink' to='/'>
                            HOME
                        </Link>
                    </li>
                    <li className='listItem'>
                        <Link className='routerLink' to='/about'>
                            ABOUT
                        </Link>
                    </li>
                    <li className='listItem'>
                        <Link className='routerLink' to='/contact'>
                            CONTACT
                        </Link>
                    </li>
                    <li className='listItem'>
                        {' '}
                        <Link className='routerLink' to='/write'>
                            WRITE
                        </Link>
                    </li>
                    <li className='listItem' onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className='right'>
                {user ? (
                    <Link className='routerLink' to='/settings'>
                        <img src={PF + user.profilePic} alt='pp' />
                    </Link>
                ) : (
                    <div>
                        <ul className='topbarList'>
                            <li className='listItem'>
                                <Link className='routerLink' to='/login'>
                                    LOGIN
                                </Link>
                            </li>
                            <li className='listItem'>
                                <Link className='routerLink' to='/register'>
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                <span>
                    <SearchIcon fontSize='large' />
                </span>
            </div>
        </div>
    );
}
