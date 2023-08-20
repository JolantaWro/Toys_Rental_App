import React from "react";
import { Col, Row } from "antd";
import imgstep1 from "../../src/assets/img/step1.png";
import imgstep2 from "../../src/assets/img/step2.png";
import imgstep3 from "../../src/assets/img/step3.png";
import imgstep4 from "../../src/assets/img/step4.png";

const HowItWorks = () => {
	const steps = [
		{ id: 1, image1: imgstep1, description: "Choose toys" },
		{ id: 2, image1: imgstep2, description: "Send the order" },
		{
			id: 3,
			image1: imgstep3,
			description: "Pick up toys in our store",
		},
		{
			id: 4,
			image1: imgstep4,
			description: "Have fun with children",
		},
	];
	return (
		<div className='holder'>
			<h2 className='holder__title'>
				How it <span className='holder__title--highlight'>works?</span>
			</h2>
			<div className='howitworks'>
				{/* Old version - without map function */}
				{/* <Row>
					<Col span={6} className='howitworks__item'>
						<div className='howitworks__item'>
							<div
								className='howitworks__item howitworks__img'
								style={{
									backgroundImage: `url(${imgstep1})`,
								}}></div>
						</div>
						<div className='howitworks__item howitworks__description'>
							<span>Choose toys</span>
						</div>
					</Col>
					<Col span={6} className='howitworks__item'>
						<div className='howitworks__item'>
							<div
								className='howitworks__item howitworks__img'
								style={{
									backgroundImage: `url(${imgstep2})`,
								}}></div>
						</div>
						<div className='howitworks__item howitworks__description'>
							<span>Send the order</span>
						</div>
					</Col>
					<Col span={6} className='howitworks__item'>
						<div className='howitworks__item'>
							<div
								className='howitworks__item howitworks__img'
								style={{
									backgroundImage: `url(${imgstep3})`,
								}}></div>
						</div>
						<div className='howitworks__item howitworks__description'>
							<span>Pick up toys in our store</span>
						</div>
					</Col>
					<Col span={6} className='howitworks__item'>
						<div className='howitworks__item'>
							<div
								className='howitworks__item howitworks__img'
								style={{
									backgroundImage: `url(${imgstep4})`,
								}}></div>
						</div>
						<div className='howitworks__item howitworks__description'>
							<span>Have fun with children</span>
						</div>
					</Col>
				</Row> */}
				{/* New version - with map function */}
				<Row>
					{steps.map((step) => (
						<Col span={6} className='howitworks__item' key={step.id}>
							<div className='howitworks__item'>
								<div
									className='howitworks__item howitworks__img'
									style={{
										backgroundImage: `url(${step.image1})`,
									}}></div>
							</div>
							<div className='howitworks__item howitworks__description'>
								<span>{step.description}</span>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default HowItWorks;
