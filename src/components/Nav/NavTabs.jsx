import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { styles } from "./styles";
// eslint-disable-next-line react/prop-types
function NavTabs({ currentPage, handlePageChange }) {
  const { root, links } = styles;
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} data-bs-theme="dark" style={root}>
          <Container fluid>
            <Navbar.Brand
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
              style={{ color: "#f4f3ee", fontSize: "40px" }}
            >
              Brandon Cruz
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
              style={root}
            >
              <Offcanvas.Header closeButton style={root}>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                  style={links}
                >
                  Brandon Cruz
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    onClick={() => handlePageChange("About")}
                    className={
                      currentPage === "About" ? "nav-link active" : "nav-link"
                    }
                    style={links}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handlePageChange("Portfolio")}
                    className={
                      currentPage === "Portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    style={links}
                  >
                    Portfolio
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handlePageChange("Contact")}
                    className={
                      currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                    style={links}
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handlePageChange("Resume")}
                    className={
                      currentPage === "Resume" ? "nav-link active" : "nav-link"
                    }
                    style={links}
                  >
                    Resume
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavTabs;
