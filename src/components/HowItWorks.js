import React from "react";
import { Col, Row } from "antd";
import imgstep1 from "../../src/assets/img/step1.png";
import imgstep2 from "../../src/assets/img/step2.png";
import imgstep3 from "../../src/assets/img/step3.png";
import imgstep4 from "../../src/assets/img/step4.png";

const HowItWorks = () => {
	return (
		<div className='howitworksblock commcontainer'>
			<div>
				<h2>How it works?</h2>
			</div>

			<Row>
				<Col span={6}>
					<div
						className='stepimg'
						style={{
							backgroundImage: `url(${imgstep1})`,
						}}></div>
					<span>Choose toys</span>
				</Col>
				<Col span={6}>
					<div
						style={{
							backgroundImage: `url(${imgstep2})`,
						}}></div>
					<span>Send the order</span>
				</Col>
				<Col span={6}>
					<div
						style={{
							backgroundImage: `url(${imgstep3})`,
						}}></div>
					<span>Pick up toys in our store</span>
				</Col>
				<Col span={6}>
					<div
						style={{
							backgroundImage: `url(${imgstep4})`,
						}}></div>
					<span>Have fun with your children</span>
				</Col>
			</Row>
		</div>
	);
};

export default HowItWorks;
