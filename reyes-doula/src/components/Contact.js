import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Flip} from 'react-toastify';
import { Form, Button, Col, Container } from 'react-bootstrap';

const Contact = () => {

    const submitNotification = () => toast.success('Your message was sent! Thank you for reaching out!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'TEMPLATE_NAME_HERE', e.target, 'USER_NAME_HERE')
            .then((result) => {
                console.log(result.text);
                submitNotification();
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <Container className="contact_form">
            <Form.Row>
                <h2 className="contact_header">Contact Me</h2>
            </Form.Row>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Name *</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Estimated Due Date</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Pronouns *</Form.Label>
                        <Form.Control type="text" placeholder="Enter your preferred pronouns" required/>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Message *</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Enter your detailed message here" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer
                class="toast"
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                transition={Flip}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
    )
};

export default Contact;