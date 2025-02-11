import React, { useState, useEffect } from "react";
import "../Style/HomeBody.css";

const images = [
    "BMW.png",
    "Bugatti.png",
    "Lambo.png",
    "Range.png",
];

const HomeBody = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <img
                src={process.env.PUBLIC_URL + `/${images[currentIndex]}`}
                alt={`Car ${currentIndex}`}
                className="carousel-image"
            />
        </div>
    );
};

export default HomeBody;
