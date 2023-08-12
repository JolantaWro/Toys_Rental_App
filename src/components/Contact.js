import React, { useState, useRef } from "react";
import contact from "../assets/img/contact.png";
import { Button, Form, Input, Modal, Result } from "antd";
import { useNavigate } from "react-router-dom";
import EmailService from "../services/email-service";
import { Col, Row } from "antd";

const Contact = () => {
	const [isNoteOpen, setIsNoteOpen] = useState(false);
	const [nameUser, setNameUser] = useState("");
	const [mailUser, setMailUser] = useState("");
	const [messageUser, setMessageUser] = useState("");

	const handleOk = () => {
		setIsNoteOpen(false);
	};

	const showNote = () => {
		setIsNoteOpen(true);
	};
	const handleCancel = () => {
		setIsNoteOpen(false);
	};

	const onFinish = (values) => {
		console.log("Success:", values);
		EmailService.sendEmail(values);
		setIsNoteOpen(true);
		setNameUser("");
		setMailUser("");
		setMessageUser("");
		// setIsModalOpen(true)
		// navigate('/sendForm');
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className='holder '>
			<h2 className='holder__title'>
				Contact <span className='holder__title--highlight'>Us</span>
			</h2>

			<Form
				className='contact__form'
				name='basic'
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 700,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<Form.Item
				// label='Name'
					name='to_name'
					rules={[
						{
							required: true,
							message: "Please input your name",
						},
					]}>
					<Input placeholder='Name' className="button" />
				</Form.Item>

				<Form.Item
					name='from_name'
					rules={[
						{
							required: true,
							message: "Please input your Email",
							type: "email",
						},
					]}>
					<Input placeholder='Email' className="button"/>
				</Form.Item>

				<Form.Item
					name='message'
					rules={[
						{
							required: true,
							message: "Please input your message",
						},
					]}>
					<Input.TextArea
						className="button"
						placeholder='Message ...'
						autoSize={{ minRows: 4, maxRows: 8 }}
					/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}>
					<Button type='primary' htmlType='submit' className="button button--state-active">
						Submit
					</Button>
				</Form.Item>
			</Form>
			<Modal open={isNoteOpen} onCancel={handleCancel} onOk={handleOk}>
				<Result status='success' title='Successfully Purchased Message!' />
			</Modal>
		</div>
	);
};

export default Contact;
