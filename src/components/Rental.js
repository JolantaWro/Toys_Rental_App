import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Button, Space } from "antd";

const Rental = () => {
	const [toysProduct, setToysProduct] = useState([]);


	const getProduct = async () => {
		try {
			const res = await fetch("http://localhost:5000/rental/");

			const parseData = await res.json();
			setToysProduct(parseData)
		
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProduct();
	  }, []);



	return (
		<>
			<div className='container'>
				<div className='holder'>
					<h2 className='holder__title'>
						Rent <span className='holder__title--highlight'>Toys</span>
					</h2>
					<Row className='rentaltoys'>
						{toysProduct.map((product) => (
							<Col
								className='rentaltoys__content'
								key={product.product_id}
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
											backgroundColor: 'pink',
											// backgroundImage: `url(${product.image})`,
										}}></div>
								</div>
								<div className='rentaltoys__content rentaltoys__title'>
									<span>{product.product_name}</span>
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
