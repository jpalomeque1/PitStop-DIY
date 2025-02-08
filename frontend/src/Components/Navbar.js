import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="dropdown" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <Link className="nav-button" to="#">Menu</Link>
                    {dropdown && (
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/">Home</Link></li>
                            <li><Link className="dropdown-item" to="/diy">DIY</Link></li>
                            <li><Link className="dropdown-item" to="/tools">Tools</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
