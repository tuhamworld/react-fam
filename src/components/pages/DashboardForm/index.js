import { useState } from "react";

export const DashboardForm = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    emailAddress: "",
    homeAaddress: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({...state, [name]: value})
  };


  const handleFormSubmission = () => {
  console.log(state)  
  }

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
          name="homeAaddress"
          cols="30"
          rows="10"
          id="address"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleFormSubmission}>Submit</button>
      </form>
    </section>
  );
};
