import "./topbar.scss";
import { Person, Mail } from '@material-ui/icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Topbar({ menuOpen, setmenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">muratKARA;</a>
                    <div className="itemContainer">
                        <Person />
                        <span>+90 553 778 44 83</span>
                        
                        <CopyToClipboard text="+905537784483">
                                <button><ContentCopyIcon /></button>
                        </CopyToClipboard>
                    </div>
                    <div className="itemContainer">
                        <Mail />
                        <span>mail.muratkara@gmail.com</span>
                        <CopyToClipboard text="mail.muratkara@gmail.com">
                                <button><ContentCopyIcon /></button>
                        </CopyToClipboard>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
