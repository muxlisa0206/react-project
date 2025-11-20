import "./testimonials.css";

function Testimonials(props){
    return(
        <div className="tmt-card">
            <div className="tmt-profile">
                <img className="profile-img" src={props.image} alt="" />
                <div className="profile-content">
                    <p className="profile-name">{props.name}</p>
                    <p className="profile-profess">{props.profession}</p>
                    <p className="profile-rate">☆☆☆☆☆</p>
                </div>
            </div>
            <p className="tmt-desc">{props.desc}</p>
            <div className="tmt-ctn">
                <p className="ctn-title">UserFirst</p>
                <p className="ctn-ver">Verified</p>
            </div>
        </div>
    )
}

export default Testimonials;