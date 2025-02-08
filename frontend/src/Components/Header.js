import React from 'react';
import Navbar from '../Components/Navbar'; // Import Navbar
import '../Style/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>PitStop DIY</h1>
            <Navbar />
        </header>
    );
};

export default Header;
