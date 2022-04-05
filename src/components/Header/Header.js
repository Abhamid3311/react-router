import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Wecome To my Fancy Routing Website!!! </h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <Link to="/posts">Posts</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header; 