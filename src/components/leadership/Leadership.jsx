import "./leadership.css";

function Leadership(props){
    return(
        <div class="lead-card">
                <img className="lead-main-img" src={props.img} alt="" />
                <div className="img-content">
                    <h2 className="lead-name">{props.name}</h2>
                    <h3 className="lead-prof">{props.prof}</h3>
                    <p className="lead-desc">
                        Excepteur sint occaecat cupidatat non proident sunt in
                        culpa qui officia deserunt mollit anim id.
                    </p>
                    <div className="lead-social">
                        <img className="lead-img" src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="" />
                        <img className="lead-img" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Leadership;