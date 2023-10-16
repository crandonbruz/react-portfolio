import React from "react";
import { Link } from "react-router-dom";
function Resume(props) {
  return (
    <div className="mx-5" style={{ color: "#f4f3ee" }}>
      <h1
        style={{
          fontFamily: "Black Ops One, cursive",
          fontSize: "70px",
          color: "#f4f3ee",
        }}
        className="content-name"
      >
        Resume
      </h1>
      <h3 style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
        Download my{" "}
        <a
          style={{
            fontFamily: "Bricolage Grotesque, sans-serif",
            textDecoration: "none",
            color: "#f4f3ee",
            fontWeight: "bold",
          }}
          href="/Cruz_Brandon-Resume.docx"
          download={{}}
        >
          Resume
        </a>{" "}
        here!
      </h3>
      <div className="my-5">
        <h2 style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
          Front-end Proficiencies
        </h2>
        <ul
          style={{
            fontSize: "25px",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuerry</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="my-5">
        <h2 style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
          Back-end Proficiencies
        </h2>
        <ul
          style={{
            fontSize: "25px",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySql, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
