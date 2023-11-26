import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import DetailsProducts from "./DetailsProduct";

const Rental = () => {
	const [toysProduct, setToysProduct] = useState([]);


	const getProduct = async () => {
		try {
			console.log(JSON.stringify(process.env))
			const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_VERCEL_URL : 'http://localhost:5000';
			const res = await fetch(`${apiUrl}/rental`);
			// const res = await fetch(`${apiUrl}`);


			// const res = await fetch("http://localhost:5000/rental/");


			// const res = await fetch(`${process.env.REACT_APP_API_URL}/rental`);

			console.log(res)

			const parseData = await res.json();
			setToysProduct(parseData)
		
		} catch (err) {
			console.error("Rental", err.message);
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
									{product.product_photo === null ? 
									<div className='rentaltoys__img' style={{backgroundColor: 'pink'}}></div> : 
									
									<div className='rentaltoys__img' style={{backgroundImage: `url(./assets/img/${product.product_photo})`}}></div>}

								</div>
								<div className='rentaltoys__content rentaltoys__title'>
									<span>{product.product_name}</span>
									<Space wrap> 
										<Link to='/product' state={{ product_id: product.product_id }}><Button className='rentaltoys__btn'>Show details</Button></Link>
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
