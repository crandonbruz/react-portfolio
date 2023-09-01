function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul
      className="nav nav-tabs"
      style={{
        backgroundColor: "#445877",
        padding: "70px",
        justifyContent: "flex-end",
      }}
    >
      <li className="nav-item">
        <h1
          className="position-absolute top-0 start-0"
          style={{ color: "white", padding: "20px" }}
        >
          Crandonbruz
        </h1>
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
