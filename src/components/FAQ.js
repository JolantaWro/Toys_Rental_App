import React from "react";
import { Collapse } from "antd";
import { fqaItems } from "../config/fqa-content.js"


const Faq = () => {
	return (
		<>
			<div className='container'>
				<div className='holder'>
					<h2 className='holder__title'>
						Frequently Asked
						<span className='holder__title--highlight'> Questions</span>
					</h2>
					<div className='faq'>
						<Collapse
							className='faq faq__collapse'
							accordion
							items={fqaItems}
							bordered={false}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Faq;
