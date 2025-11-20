import "./portfoliogrid.css";

function PortfolioGrid(props){
    return(
        <div className="portfolio-mini-box">
            <img className="mini-box-image" src={props.images} alt="" />
            <div className="portfolio-card-content">
                <div className="portfolio-card-brand">
                    <p className="brand-title">{props.branding}</p>
                    <p className="brand-rate">{props.rate}</p>
                </div>
                <h1 className="portfolio-box-title">{props.title}</h1>
                <p className="portfolio-box-desc">{props.desc}</p>
                <div className="portfolio-box-links">
                    <a className="portfolio-link" href="#">{props.link1}</a>
                    <a className="portfolio-link" href="#">{props.link2}</a>
                    <a className="portfolio-link" href="#">{props.link3}</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioGrid;