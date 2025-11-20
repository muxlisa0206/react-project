import "./service.css";

function ServiceBox(props){
    return(
            <div className="service-mini-box">
                <p className="service-mini-img">{props.images}</p>
                <h6 className="mini-box-title">{props.title}</h6>
                <p className="mini-box-desc">{props.desc}</p>
                <a className="mini-box-link" href="#">Learn more...</a>
            </div>
    )
}

export default ServiceBox;