import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
    } else if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
    } else {
      // Handle form submission
      setError("");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form
      className="mb-3 p-5"
      style={{ backgroundColor: "#598392", height: "100vh" }}
      onSubmit={handleSubmit}
    >
      <h1 style={{ color: "#f4f3ee" }}>Contact</h1>
      <div className="mb-3">
        <label
          style={{ color: "#f4f3ee", fontSize: "25px" }}
          htmlFor="name"
          className="form-label"
        >
          Name:
        </label>
        <input
          type="name"
          className="form-control w-50"
          id="name"
          aria-describedby="name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          style={{ color: "#f4f3ee", fontSize: "25px" }}
          htmlFor="email"
          className="form-label"
        >
          Email:
        </label>
        <input
          type="email"
          className="form-control w-50"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div style={{}} className="mb-3">
        <label style={{ color: "#f4f3ee", fontSize: "25px" }} htmlFor="message">
          Message:
        </label>
        <textarea
          className="form-control h-100 w-50"
          name="message"
          placeholder=""
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      ;
      <button
        type="submit"
        style={{ backgroundColor: "gray", fontWeight: "bolder" }}
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
