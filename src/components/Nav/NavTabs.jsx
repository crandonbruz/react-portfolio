import { Container, Nav, Navbar } from "react-bootstrap";
import { styles } from "./styles";
// eslint-disable-next-line react/prop-types
function NavTabs({ currentPage, handlePageChange }) {
  const { root } = styles;
  return (
    <Navbar data-bs-theme="dark" style={root}>
      <Container>
        <Navbar.Brand
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          style={{ color: "#f4f3ee", fontSize: "40px" }}
        >
          Brandon Cruz
        </Navbar.Brand>
        <Nav style={{ justifyContent: "flex-end" }}>
          <Nav.Link
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
            style={{ color: "#f4f3ee" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            style={{ color: "#f4f3ee" }}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={{ color: "#f4f3ee" }}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            style={{ color: "#f4f3ee" }}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
