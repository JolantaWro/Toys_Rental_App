import React from "react";
import { Carousel } from "antd";
import { steps } from "../config/stepCategories.js";
import imgstep4 from "../assets/img/cat-doll.png";

const Category = () => {
	return (
		<>
			<div className='holder'>
				<h2 className='holder__title'>
					Category of <span className='holder__title--highlight'>toys</span>
				</h2>
				<div className='categories'>
					<Carousel autoplay={false}>
						{steps.map((step) => (
							<div
								className='categories__carousel'
								key={step.id}
								style={{
									// backgroundImage: { imgstep4 },
									backgroundColor: "red",
								}}>
								{/* <img src={imgstep4} alt='New image' /> */}
								<div className='categories__holder'>
									<div>
										<h1 className='categories__title'>{step.name}</h1>

										<a href={step.link} className='categories__link'>
											Show offer
										</a>
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default Category;
