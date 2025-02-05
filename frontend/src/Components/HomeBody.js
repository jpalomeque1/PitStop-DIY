import React from "react";
import "../Style/HomeBody.css";

const images = ["BMW.png", "Bugatti.png", "Lambo.png", "RangRover.png","McLarens.png"]

const HomeBody = () => {
    return (
        <div>
            <div className="banner">
                <div className="slider" style={{ "--quantity": images.length }}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ "--position": index  }}
                        >
                            <img src={image} alt={`Car ${index }`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeBody;
