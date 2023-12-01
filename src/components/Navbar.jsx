import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    return(<div>
        <header>
            <img className="logo" src="logo.svg" width="100px" height="auto" alt="logo"/>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/top-colleges">Top Colleges</Link></li>
                    <li><Link to='/predict-rank'>Predict Rank</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </nav>
        </header>
    </div>);
}

export default Navbar;
