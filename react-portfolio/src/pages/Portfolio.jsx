import React from "react";
function Portfolio(props) {
  return (
    <section style={{ color: "#f4f3ee" }} id="Work">
      <h1
        style={{
          fontFamily: "Black Ops One, cursive",
          fontSize: "70px",
          color: "#f4f3ee",
        }}
        className="content-name"
      >
        Work
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              style={{ width: "100%" }}
              src="./src/assets/merry-wishlist.png"
              alt=""
            />
            <a
              style={{ color: "#a2d2ff" }}
              href="https://wyattbensman.github.io/the-merry-wishlist/"
            >
              The Merry Wishlist HTML/CSS/Javascript
            </a>
          </div>
          <div className="col-6">
            <img
              style={{ width: "100%" }}
              src="./src/assets/scoreboard-analysis.png"
              alt=""
            />
            <a href="https://scoreboard-analytics-ce788d556490.herokuapp.com/">
              Scoreboard Analytics Node/loT
            </a>
          </div>
          <div className="col-6">
            <img style={{width:"100%"}} src="./src/assets/02-portfolio-2.jpg" alt="" />
            <a href="">Calculator React/Javascript/CSS</a>
          </div>
          <div className="col-6">
            <img style={{width:"100%"}} src="./src/assets/02-portfolio-3.jpg" alt="" />
            <a href="">Pastel Puzzles MERN Stack</a>
          </div>
          <div className="col-6">
            <img style={{width:"100%"}} src="./src/assets/02-run-buddy.jpg" alt="" />
            <a href=""> Run Buddy HTML/CSS</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
