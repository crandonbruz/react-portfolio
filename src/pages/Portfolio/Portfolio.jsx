import { styles } from "./styles";
import "../../App.css";
function Portfolio() {
  const { root, img } = styles;
  return (
    <section style={{ color: "#f4f3ee" }} id="Work">
      <h1 style={root} className="content-name">
        Portfolio
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="image-container">
              <img style={img} src="/merry-wishlist.png" alt="" />
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
              <img style={img} src="/scoreboard-analysis.png" alt="" />
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
                src="/recipeScreenshot.png"
                alt=""
              />
              <a
                href="https://recipies-client-git-main-crandonbruzs-projects.vercel.app/"
                className="hover-text"
              >
                Recipe Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
