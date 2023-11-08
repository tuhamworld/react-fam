import React from 'react';

const handleChange = (event) => {
  console.log('Value: ', event.target.value);
}

function formElement() {
    <section className="form-container">
      <form action="#">
      <input onChange ={handleChange}
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
};

export default formElement;