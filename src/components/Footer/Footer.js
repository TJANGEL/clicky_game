import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <ul className="footer-list">
      <li>
        <span>
          <img
            className="logo"
            id="reactLogo"
            alt="simpsons"
            src="./public/favicon.ico"
          />
        </span>{" "}
        Clicky Game!
      </li>
      <li className="copyright">© 2019 Thomas Angeloni</li>
      <li>
        <a href="https://github.com/TJANGEL/clicky_game" target="blank">
          <span>
            <i className="fab fa-github" />{" "}
          </span>{" "}
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
