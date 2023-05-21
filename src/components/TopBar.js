import React from 'react';
import {NavLink} from "react-router-dom";

const TopBar = () => {

    const onClickStart = () => {
        window.location.href = "#start";
    };

    const onClickAbout = () => {
        window.location.href = "#about";
    };

    const onClickWorks = () => {
        window.location.href = "#works";
    };

    const onClickContact = () => {
        window.location.href = "#contact";
    };


    return (
        <>
            <div className="container">
                <div className="topBar">
                    <button onClick={onClickStart}>Start</button>
                    {/*<NavLink to="/">Start</NavLink>*/}
                    <button onClick={onClickWorks}>O co chodzi</button>
                    {/*<NavLink to="/works">O co chodzi</NavLink>*/}
                    <button onClick={onClickAbout}>O nas</button>
                    {/*<NavLink to="/about">O nas</NavLink>*/}
                    <NavLink to="/donate">Przekaż zabawki</NavLink>
                    <NavLink to="/rental">Wypożyczalnia</NavLink>
                    <button onClick={onClickContact}>Kontakt</button>
                    {/*<NavLink to="/contact">Kontakt</NavLink>*/}
                    <NavLink to="/faq">FAQ</NavLink>
                </div>
            </div>
        </>
    );
};

export default TopBar;