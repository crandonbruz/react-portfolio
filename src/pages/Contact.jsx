import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setSuccessMessage("");
    } else if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setSuccessMessage("");
    } else {
      // Handle form submission
      setError("");
      setSuccessMessage("You will be in contact soon!");
      setFormData({ name: "", email: "", message: "" });
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
    <div
      className="container-fluid"
      style={{
        color: "#f4f3ee",
        display: "flex", // Center the content horizontally
        flexDirection: "column", // Stack the children vertically
        alignItems: "center", // Center the content vertically
        justifyContent: "center", // Center the content horizontally
      }}
    >
      <h1
        style={{
          fontFamily: "Black Ops One, cursive",
          color: "#f4f3ee",
        }}
      >
        Contact Me and Let's Work Together!
      </h1>
      <form className="mb-3 p-5" onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        <div className="mb-3">
          <label
            style={{ color: "#f4f3ee", fontSize: "25px" }}
            htmlFor="name"
            className="form-label"
          >
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            name="name"
            value={formData.name}
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
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div style={{}} className="mb-3">
          <label
            style={{ color: "#f4f3ee", fontSize: "25px" }}
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="form-control h-100"
            id="message"
            name="message"
            placeholder=""
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#2f3e46",
            fontWeight: "bolder",
            border: "none",
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
