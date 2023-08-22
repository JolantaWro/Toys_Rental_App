import React from "react";
import { Col, Row } from "antd";

// const data = [
// 	"Racing car sprays burning fuel into crowd.",
// 	"Japanese princess to wed commoner.",
// 	"Australian walks 100km after outback crash.",
// 	"Man charged over missing wedding girl.",
// ];

const Category = () => {
	return (
		<div className='holder'>
			<h2 className='holder__title'>
				Category of <span className='holder__title--highlight'>toys</span>
			</h2>
			<div className='categories'>
				<div>
					<h1 className='categories__title'>Wooden toys</h1>

					<a href='#' className='categories__link'>
						Show offer
					</a>
				</div>
				<div className='categories__link_next'>
					<a href='#' className='categories__link__next'>
						&gt;
					</a>
				</div>
			</div>
		</div>
	);
};

export default Category;
