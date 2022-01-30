import { NavLink } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="inner">
                <p>2022 UFOLIO &copy; RIGHTS RESERVED.</p>
                <h1><NavLink exact to="/">UFOLIO.</NavLink></h1>
            </div>
        </footer>
    )
}

export default Footer;