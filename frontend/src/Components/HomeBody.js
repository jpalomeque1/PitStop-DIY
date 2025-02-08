import React, { useEffect, useState } from 'react';
import '../Style/HomeBody.css';

function RotatingImages({ images }) {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prevAngle => prevAngle + 5); // Adjust angle for rotation
        }, 100); // Adjust the speed of rotation by changing the interval

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    // Number of images
    const numImages = images.length;

    return (
        <div className="image-container">
            {images.map((src, index) => {
                const angleOffset = (360 / numImages) * index; // Calculate each image's angle offset
                const imageAngle = angle + angleOffset; // Total angle for this image

                return (
                    <img
                        key={index}
                        src={process.env.PUBLIC_URL + `/${src}`}
                        alt={`rotating-image-${index}`}
                        className="rotating-image"
                        style={{
                            transform: `rotate(${imageAngle}deg) translateX(150px) rotate(-${imageAngle}deg)`, // Position and rotate each image
                            transition: 'transform 0.1s ease-in-out',
                        }}
                    />
                );
            })}
        </div>
    );
}

function App() {
    const images = [
        'BMW.png',
        'Bugatti.png',
        'McLarens.png',
        'Lambo.png',
        'Range.png',
    ];

    return (
        <div className="App">
            <RotatingImages images={images} />
        </div>
    );
}

export default App;
