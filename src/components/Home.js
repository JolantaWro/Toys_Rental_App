import React from "react";
import Start from "./Start";
import HowItWorks from "./HowItWorks";
import AboutAs from "./AboutAs";
import Category from "./Category";
import Contact from "./Contact";
import OurOffer from "./OurOffer";

const Home = () => {
	return (
		<>
			<div className='container'>
				<div id='start'>
					<Start />
				</div>
				<div id='works'>
					<HowItWorks />
				</div>
				<div id='about'>
					<AboutAs />
				</div>
				<div id='ourOffer'>
					<OurOffer />
				</div>
				<div id='category'>
					<Category />
				</div>
				<div id='contact'>
					<Contact />
				</div>
			</div>
		</>
	);
};

export default Home;
