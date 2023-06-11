import React from "react";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const AboutAs = () => {
	return (
		<div className='holder'>
			<h2 className='holder__title'>
				Our <span className='holder__title--highlight'>offer</span>
			</h2>
			<div className='ouroffer'>
				<Row>
					<Col span={12}>
						<div>
							<h4 className='ouroffer__title'>Rent toys</h4>
							<p>
								Do you have no space for toys and children get bored with them
								quickly? Rent them from us for as many months as you need!
							</p>
							<NavLink to='/rental' className='button'>
								Rent Toys
							</NavLink>
						</div>
						<div>
							<h4 className='ouroffer__title'>Donate toys</h4>
							<p>
								If you have unnecessary toys, you can give it to us. We will
								send them to proven foundations.
							</p>
							<NavLink to='/donate' className='button'>
								Donate Toys
							</NavLink>
						</div>
					</Col>
					<Col span={12}></Col>
				</Row>
			</div>
		</div>
	);
};

export default AboutAs;
