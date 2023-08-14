import React from "react";
import "./Contact.scss";
import Social from "../../Components/Social/Social";
import email from "../../assets/email.png";
import messenger from "../../assets/messenger.png";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Get in Touch</h1>
            <div className="contact-details">
                <div className="socails">
                    <Social logo={email} title={"Email"} link={"sssss"} />
                    <Social logo={messenger} title={"Email"} link={"sssss"} />
                </div>
                <div className="form">
                    <h2>Form</h2>
                    <h2>Here</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;
