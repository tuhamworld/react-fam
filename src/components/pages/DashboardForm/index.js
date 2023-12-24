import { useState } from "react";

// Initial States
const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  emailAddress: "",
  homeAddress: "",
}

const DashboardForm = () => {
  // State hooks for Initial State
  const [state, setState] = useState(INITIAL_STATE);

  // Handling User Inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  // Handling Form submissions
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <section>
      <form>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          name="firstname"
          id="fname"
          placeholder="Tunde"
          onChange={handleInputChange}
        />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          name="lastname"
          id="lname"
          placeholder="Sanusi"
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          name="emailAddress"
          id="email"
          placeholder="example@gmail.com"
          onChange={handleInputChange}
        />

        <label htmlFor="address">Home Address:</label>
        <textarea
          name="homeAddress"
          cols="30"
          rows="10"
          id="address"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleFormSubmission}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default DashboardForm;