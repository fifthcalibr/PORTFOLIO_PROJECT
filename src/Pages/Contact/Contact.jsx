import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_zq4azck",
                "template_amzk9xc",
                form.current,
                "p6r0P17k234rT5JNs"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

            e.target.reset();
    };

    return (
        <div className="contact">
            <h1>Get in Touch</h1>
            <div className="contact-details">
                <div className="socails">
                    <div className="tag">
                        <MdEmail className="icon" />
                        <h4>Email</h4>
                        <h5>rinatkaka3@gmail.com</h5>
                        <a href="mailto:rinatkaka3@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </div>
                    <div className="tag">
                        <BsMessenger className="icon" />
                        <h4>Messenger</h4>
                        <h5>Rinat Zabirov</h5>
                        <a href="https://m.me/100081107693430">
                            Send a message
                        </a>
                    </div>
                </div>
                <div className="form" onSubmit={sendEmail}>
                    <form ref={form}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            id=""
                            rows="7"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
