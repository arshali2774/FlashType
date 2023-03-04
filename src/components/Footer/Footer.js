import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="https://github.com/arshali2774"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Github </span>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};
export default Footer;
