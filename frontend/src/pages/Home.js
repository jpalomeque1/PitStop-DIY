import React from "react";
import Header from "../Components/Header";
import HomeBody from "../Components/HomeBody";
import Footer from "../Components/Footer";
import "../Style/Home.css"; // Import the new styles

const Home = () => {
    return (
        <div className="home-container">
            <Header className="header" />
            <div className="main-content">
                <HomeBody />
            </div>
            <Footer className="footer" />
        </div>
    );
};

export default Home;
