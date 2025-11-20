import "./header.css";

function Header(){
    return(
        <header>
            <div className="container navbar">
                <a className="logo" href="logo">Clarity</a>
                <ul className="menuBar">
                    <li>
                        <a className="liText" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="liText" href="#about">About</a>
                    </li>
                    <li>
                        <a className="liText" href="#services">Services</a>
                    </li>
                    <li>
                        <a className="liText" href="portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="liText" href="team">Team</a>
                    </li>
                    <li>
                        <a className="liText" href="dropdown">Dropdown</a>
                    </li>
                    <li>
                        <a className="liText" href="contact">Contact</a>
                    </li>
                </ul>
                <button className="menuBtn">
                    Get Started
                </button>
            </div>
        </header>
    )
}

export default Header;