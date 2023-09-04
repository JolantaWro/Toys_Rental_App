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
								<div className=''>
									<div
										className='rentaltoys__img'
										style={{
											backgroundImage: `url(${product.image})`,
										}}></div>
								</div>
								<div className='rentaltoys__content rentaltoys__title'>
									<span>{product.title}</span>
									<Space wrap>
										<Button className='rentaltoys__btn'>Show details</Button>
									</Space>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	);
};

export default Rental;
