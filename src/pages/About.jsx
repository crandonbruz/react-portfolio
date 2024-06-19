import { React } from "react";
function About(props) {
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
        }}
      >
        About Me
      </h1>
      <img
        style={{
          width: "300px",
        }}
        src="/brandon_formal.jpg"
        alt="me"
      />
      <article
        style={{
          fontSize: "35px",
          fontFamily: "Bricolage Grotesque, sans-serif",
        }}
      >
        Hello, my name is Brandon Cruz and I am a student in the University of
        Central Florida bootcamp. I am taking this course to enhance my skills
        as a web developer. I would like to do this as a career and I felt this
        was the best route to take. Here I have some of the projects I have made
        as well as links to my information. One of my passions is baseball. I
        have been playing since I was 3 years old and I am currently training to
        play professional baseball. I love the challenge of the game. I work
        very hard every single day to be as successful as I have become in this
        sport. I know my time will come. My perserverence throughout this sport
        will guide me through my career in the software engineering field. As
        long as I work hard like I do with my passion, I can achieve anything.
      </article>
    </div>
  );
}
export default About;
