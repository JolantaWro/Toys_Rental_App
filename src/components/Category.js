import React from "react";
import { Col, Row } from "antd";

const Category = () => {
	return (
		<div className='holder'>
			<h2 className='holder__title'>
				Category of <span className='holder__title--highlight'>toys</span>
			</h2>
			<div className='category'>
				<Row>
					<Col span={12}>
						<p className=''>cat</p>
					</Col>
					<Col span={12}></Col>
				</Row>
			</div>
		</div>
	);
};

export default Category;
