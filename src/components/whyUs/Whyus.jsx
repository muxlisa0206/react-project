import "./whyus.css";

function Whyus(props){
    return(
        <div className="why-mini-box">
            <p className="why-mini-img">{props.images}</p>
            <h6 className="mini-box-title">{props.title}</h6>
            <p className="mini-box-desc">{props.desc}</p>
            <div className="static">
                <h1 className="static-title">{props.number}</h1>
                <p className="static-desc">{props.litteledesc}</p>
            </div>
        </div>
    )
}

export default Whyus;