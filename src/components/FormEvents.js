import React from 'react';

function FormEvents() {
    return (
        <section className="form-container">

            <form onSubmit={(event) => {
                event.preventDefault();
                const elements = event.target.elements;
                const { name, email, phone } = elements;
                alert(`Hello ${name.value}, your email: ${email.value} is not registered with us. Please call us with your phone number: ${phone.value} so we can be able to confirm your details`);
            }} action="#">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your real name"
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                />
                <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default FormEvents();