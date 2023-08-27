import React, { useState, useRef } from "react";
import { Col, Row } from "antd";
import contact from "../assets/img/contact.png";
import { Button, Form, Input, Modal, Result } from "antd";
import { useNavigate } from "react-router-dom";
import EmailService from "../services/email-service";

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
		<div className='holder'>
			<h2 className='holder__title'>
				Contact <span className='holder__title--highlight'>Us</span>
			</h2>

			<div className="contact">
				<Row>
					<Col span={12}>
						<div className="contact__content">
							<h2 className="contact__title">
								Leave us a message
							</h2>
							<p>Your message will be sent to our teams worldwide, who will get back to you as soon as they can. 
								Please be advised that weekends and public holidays might delay response time.
							</p>
						</div>
						
					
					</Col>
					<Col span={12}>
						<div className="contact__content">	
							<Form
								name='basic'
								labelCol={{
									span: 8,
								}}
								wrapperCol={{
									span: 16,
								}}
								style={{
									maxWidth: 600,
								}}
								initialValues={{
									remember: true,
								}}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete='off'>
								<Form.Item
									label='Name'
									name='to_name'
									rules={[
										{
											required: true,
											message: "Please input your name",
										},
									]}>
									<Input className="form__item" />
								</Form.Item>

								<Form.Item
									label="Email"
									name='from_name'
									rules={[
										{
											required: true,
											message: "Please input your Email",
											type: "email",
										},
									]}>
									<Input className="form__item"/>
								</Form.Item>

								<Form.Item
									label="Message"
									name='message'
									rules={[
										{
											required: true,
											message: "Please input your message",
										},
									]}>
									<Input.TextArea
										className="form__item"
										autoSize={{ minRows: 2, maxRows: 6 }}
									/>
								</Form.Item>

								<Form.Item
									wrapperCol={{
										offset: 8,
										span: 16,
									}}>
									<Button type='primary' htmlType='submit' className="form__button">
										Submit
									</Button>
								</Form.Item>
							</Form>
							<Modal open={isNoteOpen} onCancel={handleCancel} onOk={handleOk}>
								<Result status='success' title='Your message was sent!' className="modal__result" />
							</Modal>

						</div>
						
					</Col>
				</Row>

				
			</div>

		</div>
	);
};

export default Contact;
