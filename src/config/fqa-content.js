import { Link } from "react-router-dom";

export const fqaItems = [
	{
		key: "1",
		label: "Do I need an account to place an order",
		children: <p>Yes, and registration gives you various benefits: check your order history, avoid entering shipping details every time you want to place an order
			return orders easily and more.
		</p>
	},
	{
		key: "2",
		label: "Can I change email address on my account",
		children: <p>Sure! To do so, please contact our customer service: responsecenterservice@outlook.com or use <Link to='/#contact' className="faq__link">Contact</Link>.</p>,
	},
	{
		key: "3",
		label: "Can I refister with my Facebook or Google accounts",
		children: <p>We are currently working on this functionality.</p>,
	},
	{
		key: "4",
		label: "Where is my order",
		children: <p>All information can be found on the email and in the order history.</p>,
	},
	{
		key: "5",
		label: "When will I get my order",
		children: <p>Most orders are shipped within 24 hours of placing the order. In fact, if an order is placed before 11:00 am, it is usually processed the same day.</p>,
	},
	{
		key: "6",
		label: "When will I get my order",
		children: <p>Most orders are shipped within 24 hours of placing the order. In fact, if an order is placed before 11:00 am, it is usually processed the same day.</p>,
	},
	{
		key: "7",
		label: "Where can i find the invoice",
		children: <p>The invoice is attached to the email confirming your order. You can also find it after logging in to your account.</p>,
	},
	{
		key: "8",
		label: "What are your working hours",
		children: <p>Feel free to contact us between 9:00AM and 4:00PM, Monday to Friday.</p>,
	}
];