import { useState, useEffect } from "react";
import NavTabs from "../components/NavTabs";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Footer from "../pages/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };
  return (
    <body
      style={{
        backgroundColor: "#598392",
      }}
      className="min-vh-100"
    >
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <main id={currentPage} className="m-5">
        {renderPage()}
      </main>
      <Footer />
    </body>
  );
}
