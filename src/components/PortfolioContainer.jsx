import { useState, useEffect } from "react";
import NavTabs from "../components/Nav/NavTabs";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Footer from "../pages/Footer/Footer";
import Loading from "../pages/Loading/index";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  const renderPage = () => {
    if (currentPage === "") {
      return <About />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Loading />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };
  return (
    <div
      style={{
        backgroundColor: "#598392",
        minHeight: "100vh",
      }}
      className="min-vh-100"
    >
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      <main id={currentPage} className="m-5">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
