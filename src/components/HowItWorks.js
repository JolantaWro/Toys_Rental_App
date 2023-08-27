import React from "react";
import { Col, Row } from "antd";
import { steps } from "../config/stepHowItWorks";

const HowItWorks = () => {
	return (
		<div className='holder'>
			<h2 className='holder__title'>
				How it <span className='holder__title--highlight'>works?</span>
			</h2>
			<div className='howitworks'>
				<Row>
					{steps.map((step) => (
						<Col span={6} className='howitworks__item' key={step.id}>
							<div className='howitworks__item'>
								<div
									className='howitworks__item howitworks__img'
									style={{
										backgroundImage: `url(${step.image})`,
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
