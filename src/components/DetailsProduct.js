import React from "react";
import { Col, Row } from "antd";
import { HashLink as Link } from "react-router-hash-link";

const DetailsProducts = () => {
	return (
		<>
			<div className='container'>
				<div className='holder'>
					<h2 className='holder__title'>
						Details of
						<span className='holder__title--highlight'> Product</span>
					</h2>
					<div className='detailsproduct-head'>
						<Row>
							<Col xs={8} sm={8} md={8} lg={8} xl={8}>
								<p className='title'>Name: </p>
								<p className='content'>Lego bricks</p>
							</Col>
							<Col xs={8} sm={8} md={8} lg={8} xl={8}>
								<p className='title'>Category: </p>
								<p className='content'>Wooden Toys</p>
							</Col>
							<Col xs={8} sm={8} md={8} lg={8} xl={8}>
								<p className='title'>Availability: </p>
								<p className='content'>Yes</p>
							</Col>
						</Row>
					</div>
					<div className='detailsproduct'>
						<Row>
							<Col span={12}></Col>
							<Col span={12}>
								<p>
									Description .... We are a <strong>toy rental company</strong>.
									If you are tired of storing unnecessary toys, use our services
									and rent them for a specific time. We have almost
									<strong> 100 different brands</strong> to choose from like:
									dolls & statues, figures, baby products... Just look at the
									list of products! Join hundreds of our satisfied customers.
									Rent a toy for your child from us. It costs only $10 per day
									or $100 month, no additional charges...
								</p>
								<Link to='#' className='button'>
									Order
								</Link>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailsProducts;
