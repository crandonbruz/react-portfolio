import React from "react";
import "../App.css";
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
        Portfolio
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="image-container">
              <img
                style={{ width: "100%" }}
                src="/merry-wishlist.png"
                alt=""
              />
              <a
                className="hover-text"
                href="https://wyattbensman.github.io/the-merry-wishlist/"
              >
                The Merry Wishlist HTML/CSS/Javascript
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="image-container">
              <img
                style={{ width: "100%" }}
                src="/scoreboard-analysis.png"
                alt=""
              />
              <a
                href="https://scoreboard-analytics-ce788d556490.herokuapp.com/"
                className="hover-text"
              >
                Scoreboard Analytics Node/loT
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="image-container">
              <img
                style={{ width: "100%" }}
                src="/02-portfolio-2.jpg"
                alt=""
              />
              <a href="" className="hover-text">
                Calculator React/Javascript/CSS
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="image-container">
              <img
                style={{ width: "100%" }}
                src="/02-portfolio-3.jpg"
                alt=""
              />
              <a href="" className="hover-text">
                Pastel Puzzles MERN Stack
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="image-container">
              <img
                style={{ width: "100%" }}
                src="/02-run-buddy.jpg"
                alt=""
              />
              <a href="" className="hover-text">
                {" "}
                Run Buddy HTML/CSS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
