import { Link } from "react-scroll";
import React from "react";
import { UilInstagram, UilLinkedin, UilGithub, UilWhatsapp } from '@iconscout/react-unicons';

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/adam.png" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkill"
                className="text-md"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="expErience"
                className="text-md"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Projects"
                className="text-md"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
                <a href="https://www.instagram.com/adamhadip" target="_blank">
                <UilInstagram/>
                </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/adamhadip" target="_blank">
                <UilLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/adamhadip" target="_blank">
                <UilGithub/>
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281334858350" target="_blank">
                <UilWhatsapp/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with  by Adam Hadi Pratama</p>
      </div>
    </footer>
  );
}

export default Footer;