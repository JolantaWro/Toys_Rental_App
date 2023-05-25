import { send, init } from "emailjs-com";

const serviceId = "service_zm7bc7h";
const templateId = "template_vstkw3q";
const userID = "Z_OjRsu_F2sa0No-0";

const sendEmail = (content) => {
    init(userID);
    const toSend = {
        from_name: content.from_name,
        to_name: content.to_name,
        to_email: content.to_email,
        message: content.message,
    };
    send(serviceId, templateId, toSend)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export default { sendEmail };