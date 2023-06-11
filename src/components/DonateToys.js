import React from "react";
import { Image } from "antd";
import packToys from "../assets/img/packToys.png";
import sendToys from "../assets/img/sendToys.png";
import DonateForm from "./DonateForm";

const DonateToys = () => {
	return (
		<div className=''>
			<div className='donateHeader'>
				<h2>Let's start donate</h2>
				<h3>
					Donate your toys using our free collection service. With safety
					measures in place, donating your unwanted items couldn't be easier.
				</h3>
			</div>
			<h2>How it works</h2>
			<div className='donateContent'>
				<h3>
					Make a list of toys you want to donate. Select a transform date, and
					send us an application.{" "}
				</h3>
				<img src={sendToys} />
				{/*<Image*/}
				{/*    width={200}*/}
				{/*    src={listToys}*/}
				{/*/>*/}
				<h3>
					Pack toys in cardboard boxes or bags and we'll take care of the rest.
				</h3>
				<img src={packToys} />
				{/*<Image*/}
				{/*    width={200}*/}
				{/*    src={packToys}*/}
			</div>
			<div className='donateForm'>
				<h2>Ready to donate your toys? Let's start</h2>
				<DonateForm />
			</div>
		</div>
	);
};

export default DonateToys;
