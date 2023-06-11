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
						<a>Logowanie</a>
						<a>Rejestracja</a>
					</div>
				</div>
				<div className='topBar'>
					<Link to='/#start'>Home</Link>
					<Link to='/#works'>Our stories</Link>
					<Link to='/#about'>About as</Link>
					<NavLink to='/donate'>Donate Toys</NavLink>
					<NavLink to='/rental'>Rent Toys</NavLink>
					<Link to='/#contact'>Contact</Link>
					<NavLink to='/faq'>FAQ</NavLink>
				</div>
			</div>
		</>
	);
};

export default TopBar;
