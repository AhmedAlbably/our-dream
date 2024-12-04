import { useEffect } from "react";
import Navbar from "../../components/NavBar/NavBar";
import pathImgs from "../../images/path.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Service.scss";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      offset: 1,
    });
  }, []);

  return (
    <section className="services">
      <header className="top">
        <Navbar />
        <div className="overlay"></div>
        <div className="our-services">
          <h1>Our Services</h1>
          <img
            src={pathImgs.ServicesBanner}
            alt=""
            className="services-banner"
          />
        </div>
      </header>

      <main className="main">
        <div className="up" data-aos="fade-up">
          We have over 20 years of experience
        </div>

        <div className="separator"></div>

        <div className="down" data-aos="fade-up">
          With more than 20 years of experience, we provide professional and
          integrated services in our field, focusing on achieving the highest
          levels of quality and meeting our customers’ needs with precision and
          professionalism.
        </div>
        <div className="separator"></div>
      </main>

      <section className="bottom">
        <div className="container">
          <div className="title" data-aos="fade-down">
            <h3>Service we provide</h3>
            <p>What we do for you</p>
          </div>

          <div className="cards" data-aos="fade-up">
            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">1</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">2</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">3</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">4</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">5</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">6</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">7</p>
            </div>

            <div className="card">
              <p className="title">Websites and web applications</p>
              <p className="description">
                We design and develop websites and web applications that are
              </p>
              <p className="number">8</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Service;
