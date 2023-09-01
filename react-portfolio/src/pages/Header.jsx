import React from 'react';

const Header = ({ activeSection, onNavClick }) => {
  const sections = ['about', 'portfolio', 'contact', 'resume'];

  return (
    <header>
      <nav>
        <ul className="nav-list">
          {sections.map(section => (
            <li
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => onNavClick(section)}
            >
              <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;



