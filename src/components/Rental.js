import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import DetailsProducts from "./DetailsProduct";

const Rental = () => {
	const [toysProduct, setToysProduct] = useState([]);


	const getProduct = async () => {
		try {
			const res = await fetch(`https://api-nu-green.vercel.app/products`)
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
									{product.photo === null ? 
									<div className='rentaltoys__img' style={{backgroundColor: 'pink'}}></div> : 
									
									<div className='rentaltoys__img' style={{backgroundImage: `url(./assets/img/${product.photo})`}}></div>}

								</div>
								<div className='rentaltoys__content rentaltoys__title'>
									<span>{product.name}</span>
									<Space wrap> 
										<Link to='/product' state={{ product_id: product.id }}><Button className='rentaltoys__btn'>Show details</Button></Link>
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
