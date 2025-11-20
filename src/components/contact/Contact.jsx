import "./contact.css"

function Contact(props){
    return(
        <div className="contact-ctn-card">
            <div className="ctn-card-img"></div>
            <div className="ctn-card-ctr">
               <h4 className="ctn-card-title">{props.title}</h4>
               <p className="ctn-card-social">{props.social}</p>
               <p className="ctn-card-desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Contact;