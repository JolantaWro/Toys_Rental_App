import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useLocation } from 'react-router-dom';
import { category } from "../config/categoryProducts";

import { Button, Modal, Result } from "antd";
import EmailService from "../services/email-service";


const DetailsProducts = () => {

	const [isNoteOpen, setIsNoteOpen] = useState(false);

	const location = useLocation();
	const { product_id } = location.state

	const [toysProduct, setToysProduct] = useState([]);

	const handleOrder = () => {
		setIsNoteOpen(true)
		const value = {from_name: 'user', to_name: 'Rental Toys', message:`Order product id: ${product_id}`}
		EmailService.sendEmail(value);
	}

	const handleOk = () => {
		setIsNoteOpen(false);
		window.location.href = "/rental";
	};

	const handleCancel = () => {
		setIsNoteOpen(false);
		window.location.href = "/rental";
	};


	const getProduct = async () => {
		try {
			const res = await fetch("http://localhost:5000/rental/");

			const parseData = await res.json();
			const foundProduct = parseData.find(product => product.product_id === product_id);

			if (foundProduct) {
				setToysProduct(foundProduct);
			} else {
				console.error(`Product with id ${product_id} not found.`);
			}
		
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProduct();
	  }, [product_id]);


	const foundCategory = category.find(category => category.id === toysProduct.category_id);


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
								<p className='content'>{toysProduct.product_name}</p>
							</Col>
							<Col xs={8} sm={8} md={8} lg={8} xl={8}>
								<p className='title'>Category: </p>
								<p className='content'>{foundCategory ? foundCategory.name : 'Unknown'}</p>
							</Col>
							<Col xs={8} sm={8} md={8} lg={8} xl={8}>
								<p className='title'>Availability: </p>
								<p className='content'>{toysProduct.product_active ? 'Yes' : 'No'}</p>
							</Col>
						</Row>
					</div>
					<div className='detailsproduct'>
						<Row>
							<Col span={12}></Col>
							<Col span={12}>
								<p>{toysProduct.product_description}</p>
								<Button className='button' onClick={handleOrder}>Order</Button>
							</Col>
						</Row>
					</div>
					<Modal open={isNoteOpen} onCancel={handleCancel} onOk={handleOk}>
						<Result 
							status='success' 
							title='Thank you for placing your order!' 
							subTitle='You will receive an email with confirmation and details of your order shortly.'
							className="modal__result" 
						/>
					</Modal>
				</div>
			</div>
		</>
	);
};

export default DetailsProducts;
