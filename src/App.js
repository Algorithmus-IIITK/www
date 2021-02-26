import "./App.css";
import Helmet from "react-helmet";
import "./js/main.js";
import logo from "./img/image.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "react-particles-js";
// import "./particle/particle.js";
import "./particle/particle.css";
import Particles from "react-particles-js";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Helmet></Helmet>
      <div>
        <div className="se-pre-con" />
        {/* <div id="particles-js"></div> */}
        <Particles
          className="particles-js"
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="masthead clearfix">
                <div
                  className="inner"
                  data-aos="fade-left"
                  data-aos-delay={3000}
                >
                  <img
                    src={logo}
                    className="masthead-brand aos-init aos-animate"
                    alt="algorithmus"
                    style={{ width: "100px" }}
                    data-aos-delay={100}
                    data-aos="fade-up"
                  />
                  <nav className="nav nav-masthead">
                    <a
                      className="nav-link nav-social"
                      href="mailto:algorithmus.iiitkota@gmail.com"
                      title="E-mail"
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                    <a
                      className="nav-link nav-social"
                      href="https://github.com/Algorithmus-IIITK"
                      title="Github"
                    >
                      <i className="fab fa-github" aria-hidden="true" />
                    </a>
                    <a
                      className="nav-link nav-social"
                      href="https://www.instagram.com/algorithmus.iiitkota"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                  </nav>
                </div>
              </div>
              <div className="inner cover">
                <h1 data-aos={"fade-up"} data-aos-delay={2100}>
                  Introducing
                </h1>
                <br />
                <h1
                  className="cover-heading mb-5"
                  data-aos="fade-up"
                  data-aos-delay={2500}
                >
                  Algorithmus
                </h1>
                <h4 data-aos="fade-right" data-aos-delay={2900}>
                  Competitive Programming Society of IIIT Kota
                </h4>
                <br />
                <p className="lead" data-aos="fade-left" data-aos-delay={2900}>
                  Let the friction of brain and code generate heat until we
                  return
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
