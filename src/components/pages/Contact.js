import React, { useState } from "react";
import { validateEmail, isEmptyStr } from "../../utils/helper";
import  emailjs  from 'emailjs-com';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email');
            return;
        };

        if (!isEmptyStr(name)) {
            setError('Please enter your name.');
            return;
        } else if (!isEmptyStr(message)) {
            setError('Please enter your message');
            return;
        };

        emailjs.init(process.env.REACT_APP_APIKEY);

        emailjs.sendForm( 
            process.env.REACT_APP_SERVICE, 
            process.env.REACT_APP_TEMPLATE, 
            e.target)
            .then((result) => {
                console.log(result.text);
                setSuccess(`Thank you, I'll contact you as soon as possible.`);
                setInterval(() => {
                    setSuccess('')
                }, 6000);   
            }).catch((err) => {
                console.log( err.text);
            });

        setEmail('');
        setName('');
        setMessage('');
        setError('');
    }
    const handleMouseOut = (e) => {
        if (!e.target.value) {
            setError(`${e.target.name} is required.`);
        }

        return;
    }
    return (
        <div id="contect-me">
            <h2 className="text-light">
                Contact
            </h2>
            <form className="form text-light" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        value={email}
                        name="email"
                        id='email'
                        onChange={handleInputChange}
                        onMouseOut={handleMouseOut}
                        type="email"
                        placeholder="email"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        value={name}
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        onMouseOut={handleMouseOut}
                        type='text'
                        placeholder="name"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="form-label">
                        Message:
                    </label>
                    <textarea
                        value={message}
                        name="message"
                        id="message"
                        onChange={handleInputChange}
                        onMouseOut={handleMouseOut}
                        type='textarea'
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2"> Submit </button>
            </form>
            {error && (
                <div>
                    <p className="text-danger ">{error}</p>
                </div>
            )}
            {success && (
                <div>
                    <p className="text-success">{success}</p>
                </div>
            )}


        </div>
    )
}

export default ContactForm;