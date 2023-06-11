import React from "react";
import { Col, Row } from "antd";
import { HashLink as Link } from "react-router-hash-link";

const AboutAs = () => {
	return (
		<div className='holder'>
			<h2 className='holder__title'>
				About <span className='holder__title--highlight'>us</span>{" "}
			</h2>
			<div className='aboutusblock'>
				<Row>
					<Col span={12}></Col>
					<Col span={12}>
						<p>
							We are a <strong>toy rental company</strong>. If you are tired of
							storing unnecessary toys, use our services and rent them for a
							specific time. We have almost{" "}
							<strong>100 different brands</strong> to choose from like: dolls &
							statues, figures, baby products... Just look at the list of
							products! Join hundreds of our satisfied customers. Rent a toy for
							your child from us. It costs only $10 per day or $100 month, no
							additional charges...
						</p>
						<Link to='/#contact' className='button'>
							Contact
						</Link>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default AboutAs;
