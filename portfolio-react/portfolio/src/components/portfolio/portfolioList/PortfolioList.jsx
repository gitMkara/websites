import "./portfolioList.scss";

export default function PortfolioList({item, isActive, setSelected}) {
    return (
        <li onClick={() => setSelected(item)} 
        id={isActive ? "list-active" : "list"}>{item}</li>
    )
}
