import { useEffect } from "react";
import "../styles/LandingPage.css";
import Aos from "aos";
import "aos/dist/aos.css"
export const LandingPage = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  });

  return (
    <div data-aos="fade-right">
        <div className="container-fluid p-3 d-flex justify-content-end" data-aos="fade-left">
            <div className="row d-flex align-items-center">
                <div className="col">Home</div>
                <div className="col">About</div>
                <div className="col">Projects</div>
                <div className="col-auto">Contact Me</div>
            </div>
        </div>


            <div className="name-and-occupation">
                <p className="name">Michael McEwing</p>
                <p className="occ">Full Stack</p>
                <p className="occ">Web Developer</p>
        </div>
    </div>
  );
};

/*

  <div data-aos="fade-right">
        <div className="container-fluid p-3 d-flex justify-content-end" data-aos="fade-left">
            <div className="row d-flex align-items-center">
                <div className="col">Home</div>
                <div className="col">About</div>
                <div className="col">Projects</div>
                <div className="col-auto">Contact Me</div>
            </div>
        </div>


            <div className="container name-and-occupation d-flex justify-content-center flex-column align-items-sm-start align-items-center" >
                <p className="row occ name">Michael McEwing</p>
                <p className="row occ">Full Stack</p>
                <p className="row occ">Web Developer</p>
        </div>
    </div>

*/


