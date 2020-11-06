import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'TEMPLATE_NAME_HERE', e.target, 'USER_NAME_HERE')
            .then((result) => {
                console.log(result.text);
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
            </div>
        </div>
    )
};

export default Contact;