import React from "react";
import { TypeAnimation } from "react-type-animation";
import { UilInstagram, UilLinkedin, UilGithub, UilWhatsapp } from '@iconscout/react-unicons';



export default function HeroSection() {
  const handleCvDownload = () => {
    const cv =
      "https://docs.google.com/document/d/1VZDcJSEjr6GfAUlY0J2T36hA5FsPMaPlEWHMMJS-r88/edit";
    window.open(cv, "_blank");
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <div className="type-animation-style">
            <TypeAnimation
              sequence={[
                "Hello 👋🏻,",
                1000,
                "Bonjour 👋🏻,",
                1000,
                "Ohayou 👋🏻,",
                1000,
                "Willkommen 👋🏻,",
                1000
              ]}
              wrapper="p"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          {/* <p className="section--title">Hello 👋🏻 There, </p> */}
          <h2 className="section--title-he">I'm Adam,</h2>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Data Analyst.</span>
          </h1>
          <p className="hero--section-description">
          Have an interest and are looking for a job or internship in the fields of Data Analyst, Data Scientist, Business Intelligence, Project Management, and Human Capital Development.
          </p>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary" onClick={handleCvDownload}>
            Download CV
          </button>
        </div>
        <div className="sosmed">
              <a href="https://www.instagram.com/adamhadip" target="_blank" className="ui-instagram">
                <UilInstagram/>
              </a>
              <a href="https://www.linkedin.com/in/adamhadip" target="_blank" className="ui-linkedin">
                <UilLinkedin/>
              </a>
              <a href="https://www.github.com/adamhadip" target="_blank" className="ui-github">
                <UilGithub/>
              </a>
              <a href="https://wa.me/6281334858350" target="_blank">
                <UilWhatsapp/>
              </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/3.png" alt="Hero Section" />
      </div>
    </section>
  );
}
