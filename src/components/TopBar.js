import React from 'react';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const TopBar = () => {
    return (
        <>
            <div className="container">
                <div className="topBar">
                    <Link to='/#start'>Start</Link>
                    <Link to='/#works'>O co chodzi</Link>
                    <Link to='/#about'>O nas</Link>
                    <NavLink to="/donate">Przekaż zabawki</NavLink>
                    <NavLink to="/rental">Wypożyczalnia</NavLink>
                    <Link to='/#contact'>Kontakt</Link>
                    <NavLink to="/faq">FAQ</NavLink>
                </div>
            </div>
        </>
    );
};

export default TopBar;