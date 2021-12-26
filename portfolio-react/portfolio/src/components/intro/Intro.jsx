import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Intro() {
const useRefer = useRef(null);
useEffect(() => {
    init(useRefer.current, 
        { showCursor: true,
        backSpeed:  70,
        backDelay:  1500, 
        strings: ["Developer", "Designer", "Content Creator", "Learner" ] });
}, []);


    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="../assets/CV_PHOTO-removebg-preview.png" alt="It's me. :)"/>
                </div>
            </div>
            <div className="right">
                <div className="itemContainer">
                    <h2>Hello World ;)</h2>
                    <h1>Murat KARA</h1>
                    <h3>I'm a <span ref={useRefer}></span></h3>
                    <div className="arrow">
                        <a href="#portfolio"><img src="../assets/outline_keyboard_arrow_down_black_24dp.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
