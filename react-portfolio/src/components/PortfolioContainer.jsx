import { useState } from 'react';
import NavTabs from '../components/NavTabs';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import  Footer  from "../pages/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <main id={currentPage} className="mx-3">{renderPage()}</main>
      <Footer/>
    </div>
  );
}
