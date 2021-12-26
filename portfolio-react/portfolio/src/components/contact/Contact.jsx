import { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [state, setState] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setState(true);
    }

    return (
        <div className='contact' id="contact">
            <div className="container">
                <div className="left">
                    <img src="../assets/shake.svg" />
                </div>

                <div className="right">
                    <h1>Contact</h1>
                    <form>
                        <input type="email" placeholder="E-mail" />
                        <textarea placeholder="Message" />
                        <button type="submit" onClick={handleClick}>Send</button>
                        {state && <span style={{ color: "green" }}>Thank You :)</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
