import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Flip} from 'react-toastify';

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
        <div >
            <p>Welcome to the Contact Form page!</p>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label for="name">Your Name</label>
                        <input type="text" name="name" id="name" required/>
                        <div class="validate"></div>
                    </div>
                    <div>
                        <label for="email">Your Email</label>
                        <input type="email" name="email" id="email" data-msg="Please enter a valid email" required/>
                        <div class="validate"></div>
                    </div>
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="10" data-rule="required" data-msg="Please write something for Rosalie Reyes" required></textarea>
                        <div class="validate"></div>
                    </div>
                    <div class="text-center">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
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
            </div>
        </div>
    )
};

export default Contact;