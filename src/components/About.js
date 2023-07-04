import "../styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="about-container" data-aos="fade-left">
      <div className="about-header-container">
        <span className="about-me-header">About Me</span>
        </div>
        <div className="img-and-about-me">
      <div className="self-img-container">
      <img
        src="/images/self.png"
        alt="img"
      />
      </div>
      <div>
        <p className="about-me-text">
          Throughout my career, I've honed my coding skills, embracing various
          programming languages and frameworks to develop robust software
          solutions. The discipline and precision I've cultivated from playing
          guitar for the past 13 years have translated seamlessly into my approach to writing clean,
          efficient, and scalable code. Just like crafting a beautiful melody, I
          strive to create elegant and harmonious software that delivers
          exceptional user experiences.
          <br /><br />

          Driven by curiosity and a growth mindset, I am continuously expanding
          my knowledge and staying up-to-date with the latest technologies and
          trends in the software development field. I am eager to apply my
          skills and contribute to a dynamic and innovative team where I can
          make a meaningful impact.
          <br /><br />
          You can find me at :
        </p>
        <div className="socials">
        <a href="https://www.linkedin.com/in/michael-mcewing/" target="_blank" rel="noreferrer"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a>
        <a href="https://github.com/duke650" target="_blank" rel="noreferrer"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
        </div>
        </div>
        
        </div>
    </div>
  );
};
