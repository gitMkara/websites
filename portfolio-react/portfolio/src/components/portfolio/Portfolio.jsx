import "./portfolio.scss";
import PortfolioList from "./portfolioList/PortfolioList";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio} from "../../data.js"
import { useState, useEffect } from "react";

const list = [
    "Featured",
    "Web",
    "Mobile",
    "Design",
    "Content"
]
export default function Portfolio() {
    const [selected, setSelected] = useState("Featured");
    const [data, setData] = useState(featuredPortfolio);
    
    useEffect(() => {
        switch (selected) {
            case list[0]:                
                setData(featuredPortfolio);
                break;
            case list[1]:
                setData(webPortfolio);
                break;
            case list[2]:
                setData(mobilePortfolio);
                break;            
            case list[3]:
                setData(designPortfolio);
                break;            
            case list[4]:
                setData(contentPortfolio);
                break;                
        
            default:
                break;
        }
    }, [selected])
    
    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <div className="listContainer">
                <ul>
                    {list.map(key => 
                    <PortfolioList 
                    item = {key}
                    isActive = {selected == key} 
                    setSelected = {setSelected} />)}
                </ul>

            </div>
            <div className="imgContainer">
                {data.map(d => (
                    <img src={d.img}/>
                ))}
            </div>
        </div>
    )
}
