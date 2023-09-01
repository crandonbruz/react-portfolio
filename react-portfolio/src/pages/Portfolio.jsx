import React from "react";
function Portfolio(props) {
  return (
    <section
      style={{ backgroundColor: "#598392", height: "100vh", color: "white" }}
      id="Work"
    >
      <h1
        style={{
          fontFamily: "Black Ops One, cursive",
          fontSize: "70px",
          color: "#eff6e0",
        }}
        className="content-name"
      >
        Work
      </h1>

      <div className="flex-container">
        <div className="flex-item big-picture">
          <img src="./src/assets/merry-wishlist.png" alt="" />
          <a href="https://wyattbensman.github.io/the-merry-wishlist/">
            The Merry Wishlist HTML/CSS/Javascript
          </a>
        </div>
        <div className="flex-item">
          <img src="./src/assets/scoreboard-analysis.png" alt="" />
          <a href="https://scoreboard-analytics-ce788d556490.herokuapp.com/">
            Scoreboard Analytics Node/loT
          </a>
        </div>
        <div className="flex-item">
          <img src="./assets/images/02-portfolio-2.jpg" alt="" />
          <a href="">Calculator React/Javascript/CSS</a>
        </div>
        <div className="flex-item">
          <img src="./assets/images/02-portfolio-3.jpg" alt="" />
          <a href="">Pastel Puzzles MERN Stack</a>
        </div>
        <div className="flex-item">
          <img src="./assets/images/02-run-buddy.jpg" alt="" />
          <a href=""> Run Buddy HTML/CSS</a>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
