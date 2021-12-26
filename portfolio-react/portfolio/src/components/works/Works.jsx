import "./works.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../data.js";

import { useState } from "react";

export default function Works() {
const [state, setState] = useState(0);

    return (
        <div className='works' id="works">
            <div className="container" style={{left: "-"+`${state}`+"00vw"}}>
                {featuredPortfolio.map((d) => (
                    <div className="itemContainer">
                        <div className="item">
                            <div className="left">
                                <p>{d.title}</p>
                            </div>
                            <div className="right">
                                <img src={d.img} />
                            </div>
                        </div>
                    </div>

                ))}</div>
            <img className="arrow left" onClick={() => state <= 0 ? setState((featuredPortfolio.length - 1)) : setState(state - 1)} src="../assets/outline_keyboard_arrow_down_black_24dp.png" />

            <img className="arrow right" onClick={() => state >= (featuredPortfolio.length - 1) ? setState(0) : setState(state + 1)} src="../assets/outline_keyboard_arrow_down_black_24dp.png" />

        </div>
    )
}
