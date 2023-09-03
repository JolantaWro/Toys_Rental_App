import React from "react";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import { toysList } from "../config/dataToys";

const Rental = () => {
	return (
		<>
			<div className='container'>
				<div className='holder'>
					<h2 className='holder__title'>
						Rent <span className='holder__title--highlight'>Toys</span>
					</h2>

					<Row className='rentaltoys'>
						{toysList.map((product) => (
							<Col
								className='rentaltoys__content'
								key={product.id}
								xs={{
									span: 5,
									offset: 1,
								}}
								lg={{
									span: 5,
									// offset: 2,
								}}>
								<div className='rentaltoys rentaltoys__content'>
									<div
										className='rentaltoys  rentaltoys__img'
										style={{
											backgroundImage: `url(${product.image})`,
										}}></div>
								</div>
								<div className='rentaltoys rentaltoys__content rentaltoys__title'>
									<span>{product.title}</span>
									<Space wrap>
										<Button className='rentaltoys__btn'>Order</Button>
									</Space>
								</div>
							</Col>
							// <Col
							// 	key={product.id}
							// 	xs={{
							// 		span: 5,
							// 		offset: 1,
							// 	}}
							// 	lg={{
							// 		span: 6,
							// 		offset: 2,
							// 	}}>
							// 	<div className=' rentaltoys rentaltoys__content'>
							// 		<div className='rentaltoys  rentaltoys__image'></div>
							// 		<h3 className='rentaltoys  rentaltoys__title'>
							// 			{product.title}
							// 		</h3>
							// 		<div className='rentaltoys  rentaltoys__status'>
							// 			{product.status}
							// 		</div>
							// 		<Space wrap>
							// 			<Button>Order</Button>
							// 		</Space>
							// 	</div>
							// </Col>
						))}
					</Row>
				</div>
			</div>
		</>
	);
};

export default Rental;
