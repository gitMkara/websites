import "./topbar.scss";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="left">
                <span><TwitterIcon fontSize="large" /></span>
                <span><InstagramIcon fontSize="large" /></span>
                <span><GitHubIcon fontSize="large" /></span>
            </div>
            <div className="center">
                <ul className="topbarList">
                    <li className="listItem">HOME</li>
                    <li className="listItem">ABOUT</li>
                    <li className="listItem">CONTACT</li>
                    <li className="listItem">WRITE</li>
                    <li className="listItem">LOGOUT</li>
                </ul>
            </div>
            <div className="right">
                <img src="../assets/myPhoto.png"/>
                <span><SearchIcon fontSize="large"/></span>
            </div>
        </div>
    )
}
