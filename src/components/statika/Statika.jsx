import "./statika.css";

function Statika(props){
    return(
        <div className="statika-card">
            <div className="statistika">
                <h5 className="statistika-title">{props.number}</h5>
                <p className="statistika-desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Statika;