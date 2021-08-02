import React, { useState } from "react";
import { validateEmail, isEmptyStr } from "../../utils/helper";

function ContactForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleinputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setEmail(inputValue);
        } else if (inputType === 'email') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDfault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email');
            return;
        }

        if (isEmptyStr(name)) {
            setError('Please enter your name.');
            return;
        } else if (isEmptyStr(message)) {
            setError('Please enter your message');
            return;
        }

        setEmail('');
        setName('');
        setMessage('');
    }
    const handleMouseOut = (e) => {
        if (!e.target.value) {
            setError(`${e.target.name} is required.`);
        }

        return;
    }
    return (
        <div>
            <h2>
                Contact
            </h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        value={email}
                        name="email"
                        id='email'
                        onChange={handleinputChange}
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
                        onChange={handleinputChange}
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
                        onChange={handleinputChange}
                        onMouseOut={handleMouseOut}
                        type='textarea'
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn"> Submit </button>
            </form>
            {error && (
                <div>
                    <p className="error-text">{error}</p>
                </div>
            )}


        </div>
    )
}

export default ContactForm;