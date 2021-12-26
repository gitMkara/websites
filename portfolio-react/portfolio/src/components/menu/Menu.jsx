import "./menu.scss";

export default function Menu( {menuOpen, setmenuOpen} ) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={() => setmenuOpen(!menuOpen)}>Home</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setmenuOpen(!menuOpen)}>Portfolio</a>
                </li>
                <li>
                    <a href="#works" onClick={() => setmenuOpen(!menuOpen)}>Works</a>
                </li>
                <li>
                    <a href="#testimonials" onClick={() => setmenuOpen(!menuOpen)}>Testimonials</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setmenuOpen(!menuOpen)}>Contact</a>
                </li>
            </ul>
        </div>
    )
}
