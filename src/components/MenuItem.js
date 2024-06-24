import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, image, description }) => {
    return (
        <div className="menu-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="price">{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default MenuItem;
