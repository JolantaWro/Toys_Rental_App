import React from "react";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;

const items = [
	{
		key: "1",
		label: "This is panel header 1",
		children: <p>{text}</p>,
	},
	{
		key: "2",
		label: "This is panel header 2",
		children: <p>{text}</p>,
	},
	{
		key: "3",
		label: "This is panel header 3",
		children: <p>{text}</p>,
	},
];

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
							items={items}
							bordered={false}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Faq;
