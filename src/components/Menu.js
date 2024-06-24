import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import beefWithGinger from '../assets/beef-with-ginger.jpg'; // Import the image

const menuItems = [
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger, // Use the imported image
        description: 'A delicious dish with fresh ginger and premium beef.'
    },
    {
        title: 'Beef with Ginger',
        price: '$27',
        image: beefWithGinger,
        description: 'A delicious dish with fresh ginger and premium beef.'
    },

];

const Menu = () => {
    return (
        <section className="menu">
            <h2>Our Menu</h2>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Menu;
