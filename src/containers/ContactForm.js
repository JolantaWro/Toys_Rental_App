import { Button, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const ContactForm = () => (
    <Form className="containerContact"
        name="basic"
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
        autoComplete="off"
    >
        <Form.Item
            label="Name"
            name="name"
            rules={[
                {
                    required: true,
                    message: 'Please input your name',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Email"
            name="mail"
            rules={[
                {
                    required: true,
                    message: 'Please input your Email',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Message"
            name="message"
            rules={[
                {
                    required: true,
                    message: 'Please input your message',
                },
            ]}
        >
            <TextArea rows={2} />
        </Form.Item>


        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
export default ContactForm;