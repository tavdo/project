import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Where every ingredient tells a story</h1>
                <p>Discover our passion for fresh, seasonal ingredients.</p>
                <button>Read More</button>
            </div>
            <img src={heroImage} alt="Hero Image" />
        </section>
    );
};

export default Hero;
