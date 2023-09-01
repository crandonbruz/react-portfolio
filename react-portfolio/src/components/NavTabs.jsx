function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul
      className="nav nav-tabs"
      style={{
        backgroundColor: "#124559",
        padding: "70px",
        justifyContent: "flex-end",
        fontSize: "40px",
        color: "#f6fff8",
        fontFamily: "Black Ops One, cursive",
      }}
    >
      <li className="nav-item">
        <a
          className="position-absolute top-10 start-0"
          style={{
            color: "#f6fff8",
            padding: "20px",
            fontFamily: "Black Ops One, cursive",
            textDecoration: "none",
          }}
        >
          Crandonbruz
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
