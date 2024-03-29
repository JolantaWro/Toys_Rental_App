import React, { useState, useRef } from "react";
import {
	Button,
	Form,
	Input,
	Modal,
	Result,
	DatePicker,
	InputNumber,
} from "antd";
import { useNavigate } from "react-router-dom";
import EmailService from "../services/email-service";

const DonateForm = () => {
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
		<>
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
					<Input className='form__item' />
				</Form.Item>

				<Form.Item
					label='Email'
					name='from_name'
					rules={[
						{
							required: true,
							message: "Please input your Email",
							type: "email",
						},
					]}>
					<Input className='form__item' />
				</Form.Item>

				<Form.Item
					name='phone'
					label='Phone Number'
					rules={[
						{
							required: true,
							message: "Please input your phone number!",
						},
					]}>
					<Input className='form__item' />
				</Form.Item>

				<Form.Item
					label='Donate'
					name='donate'
					rules={[
						{
							required: true,
							message: "Please input your donate",
						},
					]}>
					<Input className='form__item' />
				</Form.Item>

				<Form.Item label='Number of bags'>
					<InputNumber className='form__item' />
				</Form.Item>

				<Form.Item label='Date Picker'>
					<DatePicker className='form__item' />
				</Form.Item>

				<Form.Item
					label='Message'
					name='message'
					rules={[
						{
							required: true,
							message: "Please input your message",
						},
					]}>
					<Input.TextArea
						className='form__item'
						autoSize={{ minRows: 2, maxRows: 6 }}
					/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<Modal open={isNoteOpen} onCancel={handleCancel} onOk={handleOk}>
				<Result status='success' title='Successfully Purchased Message!' />
			</Modal>
		</>
	);
};

export default DonateForm;
