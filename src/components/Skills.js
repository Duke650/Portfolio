import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/Skills.css";
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <div className="skills-container" data-aos="fade-down">
      <div className="skills-header-container">
        <span className="skills-header">SKILLS</span>
      </div>
      <div className="skills-inner-container">
        <div className="img-and-name">
          <div className="skill-img">
            <img
              src="https://img.icons8.com/ios-filled/50/html-5--v1.png"
              alt="html-5--v1"
            />
          </div>
          <p>HTML</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img
              src="https://img.icons8.com/ios-filled/50/css3.png"
              alt="css3"
            />
          </div>
          <p>CSS</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img
              src="https://img.icons8.com/ios-filled/50/javascript.png"
              alt="javascript"
            />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img src="https://img.icons8.com/dotty/80/react.png" alt="react" />
          </div>
          <p>React</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img
              src="https://img.icons8.com/ios-filled/50/postgreesql.png"
              alt="postgreesql"
            />
          </div>
          <p>PostgreSQL</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img
              src="https://img.icons8.com/color/48/express.png"
              alt="express"
            />
          </div>
          <p>Express.js</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img src="https://img.icons8.com/ios-filled/50/git.png" alt="git" />
          </div>
          <p>Git</p>
        </div>
        <div className="img-and-name">
          <div className="skill-img">
            <img
              src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-Responsive-Design-web-and-seo-vectorslab-glyph-vectorslab.png"
              alt="external-Responsive-Design-web-and-seo-vectorslab-glyph-vectorslab"
            />
          </div>
          <p>Responsive Design</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

/*
   <h1 className="text-center">SKILLS</h1>
      <div className=" container-fluid d-flex flex-wrap justify-content-center">
        <div className="row d-flex flex-column img-and-name p-0">
          <div className=" d-flex justify-content-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/html-5--v1.png"
              alt="html-5--v1"
            />
          </div>
          <p className="text-center">HTML</p>
        </div>
        <div className="img-and-name">
          <div className="d-flex justify-content-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/css3.png"
              alt="css3"
            />
          </div>
          <p className="text-center">CSS</p>
        </div>
        <div className="img-and-name">
          <div className="d-flex justify-content-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/javascript.png"
              alt="javascript"
            />
          </div>
          <p className="text-center">JavaScript</p>
        </div>
        <div className="img-and-name">
          <div className="d-flex justify-content-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/dotty/80/react.png"
              alt="react"
            />
          </div>
          <p className="text-center">React</p>
        </div>
        <div className="d-flex flex-column justify-content-center img-and-name">
          <div className="d-flex justify-content-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/postgreesql.png"
              alt="postgreesql"
            />
          </div>
          <p className="text-center">PostgreSQL</p>
        </div>
        <div className="img-and-name">
          <div className="d-flex justify-content-center">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/express.png"
              alt="express"
            />
          </div>
          <p className="text-center">Express.js</p>
        </div>
        <div className="img-and-name">
          <div className="d-flex justify-content-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-Responsive-Design-web-and-seo-vectorslab-glyph-vectorslab.png"
              alt="external-Responsive-Design-web-and-seo-vectorslab-glyph-vectorslab"
            />
          </div>
          <p className="text-center">Responsive Design</p>
        </div>
      </div>
*/
