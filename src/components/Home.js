import React from "react";
import Start from "./Start";
import HowItWorks from "./HowItWorks";
import AboutAs from "./AboutAs";
import DonateToys from "./DonateToys";
import Rental from "./Rental";
import Contact from "./Contact";
import FAQ from "./FAQ";

const Home = () => {
	return (
		<>
			<div className='container'>
				<div id='start'><Start /></div>
				<div id='works'><HowItWorks /></div>
				<div id='about'><AboutAs /></div>
				<div><DonateToys /></div>
				<div><Rental /></div>
				<div id='contact'><Contact /></div>
				<div><FAQ /></div>
			</div>
		</>
	);
};

export default Home;
