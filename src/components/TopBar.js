import React from 'react';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const TopBar = () => {
    return (
        <>
            <div className="container">
                <div className="topBar">
                    <Link to='/#start'>Start</Link>
                    <Link to='/#works'>Our stories</Link>
                    <Link to='/#about'>About as</Link>
                    <NavLink to="/donate">Donate Toys</NavLink>
                    <NavLink to="/rental">Rent Toys</NavLink>
                    <Link to='/#contact'>Contact</Link>
                    <NavLink to="/faq">FAQ</NavLink>
                </div>
            </div>
        </>
    );
};

export default TopBar;