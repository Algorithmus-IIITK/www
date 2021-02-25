import "./App.css";
import Helmet from "react-helmet";
import "./js/main.js";
import logo from "./img/image.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
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
