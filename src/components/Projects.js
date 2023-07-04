import "../styles/Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });
  return (
    <div>
      <div className="projects-header-container" data-aos="zoom-out">
        <span>Projects</span>
      </div>
      <div className="projects-inner-container">
        <div className="project-img-container" data-aos="fade-right" data-aos-offset="100">
          <img
            className="project-img"
            src="/images/Screen Shot 2023-06-29 at 10.51.34 AM.png"
            alt=""
          />
        </div>
        <div className="project-description" data-aos="fade-left">
          <div className="project-header-container">
            <span className="project-header">Sticky Situations</span>
          </div>
          <br />
          <div>
            <p className="project-text">
              The Sticky Situations is an e-commerce website dedicated to
              offering a wide range of unique and creative stickers. From cute
              and colorful designs to trendy and artistic ones, our website
              provides a platform for sticker enthusiasts to explore and
              purchase their favorite designs.
              <br />
              <br />
              This project was developed collaboratively by a 4-person team,
              leveraging their combined skills and expertise in web development.
            </p>
            <div className="technologies-container">
              <p className="technologies-header">Technologies Used :</p>
              <p>HTML, CSS, React, Express.js, postgreSQL, NodeJS</p>
            </div>
            <div className="project-link-container">
              <a href="https://imlfg.onrender.com/posts">Live Demo</a>
              <a
                href="https://github.com/Err-Handlers/GraceShopper"
                target="_blank"
                rel="noreferrer"
              >
                Git Hub
              </a>
            </div>
            <div>
              <p className="read-below"> Please Read Below:</p>
              <p>
                Please note that there might be a slight delay in the live site
                loading as Render implements a timeout mechanism that
                automatically terminates idle database connections after a
                specific period of inactivity. This mechanism is in place to
                optimize resource allocation and enhance overall performance.
                Therefore, if the site has been idle for some time, it may take
                a moment for the connection to be reestablished. Thank you for
                your patience.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-inner-container">
        <div className="project-description" data-aos="fade-left">
          <div className="project-header-container">
            <span className="project-header">ImLfg</span>
          </div>
          <br />
          <div>
            <p className="project-text">
              ImLfg ("looking for group") is a dynamic social media website
              designed exclusively for gamers, providing them with a platform to
              connect, interact, and collaborate with fellow gamers based on
              their preferred games and game modes. With Imlfg, gamers can
              easily find like-minded players, form teams, and embark on
              thrilling gaming adventures together.
              <br />
              <br />
              Imlfg is designed to connect gamers from all around the world,
              facilitating meaningful social interactions, collaborations, and
              memorable gaming experiences. Whether you're a casual player
              looking for a friendly match or a competitive gamer seeking a
              dedicated team, Imlfg is the ideal platform to find and connect
              with fellow gamers who share your passion for gaming.
            </p>
            <div className="technologies-container">
              <p className="technologies-header">Technologies Used :</p>
              <p>HTML, CSS, React, Express.js, postgreSQL, NodeJS</p>
            </div>
            <div className="project-link-container">
              <a
                href="https://imlfg.onrender.com/posts"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Mike-and-Zach/LFG"
                target="_blank"
                rel="noreferrer"
              >
                Git Hub
              </a>
            </div>
            <div>
              <p className="read-below"> Please Read Below:</p>
              <p>
                Please note that there might be a slight delay in the live site
                loading as Render implements a timeout mechanism that
                automatically terminates idle database connections after a
                specific period of inactivity. This mechanism is in place to
                optimize resource allocation and enhance overall performance.
                Therefore, if the site has been idle for some time, it may take
                a moment for the connection to be reestablished. Thank you for
                your patience.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="project-img-container" data-aos="fade-right">
          <img className="project-img" src="/images/imlfg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
