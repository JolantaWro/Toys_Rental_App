import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/img/konik-g63ae1df3d_640.png";

const TopBar = () => {
	return (
		<>
			<div className='container'>
				<div className='user-panel'>
					<div>
						<img src={logo} className='user-panel__logo-img'></img>
						<span className='user-panel__logo-name'>TOYS RENTAL</span>
					</div>
					<div>
						<a className="topbar__link">Logowanie</a>
						<a className="topbar__link">Rejestracja</a>
					</div>
				</div>
				<div className='topbar'>
					<Link to='/#start' className="topbar__link">Home</Link>
					<Link to='/#works' className="topbar__link">Our stories</Link>
					<Link to='/#about' className="topbar__link">About as</Link>
					<NavLink to='/donate' className="topbar__link">Donate Toys</NavLink>
					<NavLink to='/rental' className="topbar__link">Rent Toys</NavLink>
					<Link to='/#contact' className="topbar__link">Contact</Link>
					<NavLink to='/faq' className="topbar__link">FAQ</NavLink>
				</div>
			</div>
		</>
	);
};

export default TopBar;
