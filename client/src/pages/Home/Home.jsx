import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import pathImgs from "../../images/path";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss";

function Home() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1400,
      offset: 1,
    });

    function sliderWidth() {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }

    let count = 0;

    if (count !== 1) {
      sliderWidth();
      count = 1;
    }

    window.addEventListener("resize", sliderWidth);

    return () => {
      window.removeEventListener("resize", sliderWidth);
    };
  }, []);

  return (
    <div className="home">
      <header>
        <img src={pathImgs.shadowImg} alt="" />
        <NavBar />

        <div className="content">
          <div className="left-side" data-aos="fade-up">
            <h1>Enjoy the freedom of freelancing and find the best talent</h1>
            <p>
              Whether you are looking for a creative designer, Professional
              developer, or a distinguished writer, we are here to connect you
              with the best skilled freelancers to turn your ideas into reality.
              Embark on your journey now and bring your projects to life in a
              professional and easy way.
            </p>
            <Link to="/contact">Start</Link>
          </div>
          <div className="right-side" data-aos="fade-up">
            <img src={pathImgs.bannerHomeHeader} alt="" />
          </div>
        </div>
      </header>

      <section className="choose-us">
        <header data-aos="fade-down">
          <h3><span></span>Why Choose Us<span></span></h3>
          <h2>We Serve Professionally</h2>
        </header>

        <div className="cards">
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <div className="image">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h3>Secure Transactions</h3>
            <p>
              Safe payment methods ensure peace of mind for both clients and
              freelancers
            </p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <div className="image">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <h3>Quality Assurance</h3>
            <p>Our rating and review system helps you hire with confidence</p>
          </div>

          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <div className="image">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3>24/7 Support</h3>
            <p>We're here to assist you at any time, every step of the way</p>
          </div>
        </div>
      </section>

      <section className="how-work">
        <header data-aos="fade-down">
          <h3>Howe work it</h3>
        </header>

        <div className="content">
          <div className="left-side" data-aos="fade-up">
            <img src={pathImgs.backgroundOne} alt="" />
          </div>

          <div className="right-side" data-aos="fade-up">
            <header>
              <h3>Howe work it</h3>
            </header>

            <div className="features">
              <div className="feature">
                <span className="num">1</span>
                <div className="content">
                  <h3>Create your project</h3>
                  <p>
                    Describe your idea or project with details such as goals,
                    budget, and timeline to attract the best freelancers
                  </p>
                </div>
              </div>

              <div className="feature">
                <span className="num">2</span>
                <div className="content">
                  <h3>Browse freelancers</h3>
                  <p>
                    Browse profiles, past work, and reviews to find the right
                    person to complete your project
                  </p>
                </div>
              </div>

              <div className="feature">
                <span className="num">3</span>
                <div className="content">
                  <h3>Start working and collaborating</h3>
                  <p>
                    Communicate directly with the freelancer, define work
                    stages, and track progress through our platform with ease
                  </p>
                </div>
              </div>

              <div className="feature">
                <span className="num">4</span>
                <div className="content">
                  <h3>Pay securely</h3>
                  <p>
                    Initiate payments securely once you are satisfied with the
                    work, through our reliable payment system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2 data-aos="fade-down">REVIEWS</h2>
        <motion.div
          className="carousel"
          ref={carouselRef}
          whileTap={{ cursor: "grabbing" }}
          data-aos="fade-up"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>

            <div className="review">
              <header>
                <div className="info">
                  <div className="image">
                    <img src={pathImgs.userImg} alt="" />
                  </div>
                  <div className="name-and-email">
                    <h4 className="name">Ali Ahmed</h4>
                    <span className="email">Al1124@gmail.com</span>
                  </div>
                </div>

                <div className="image">
                  <img src={pathImgs.quote} alt="" />
                </div>
              </header>

              <p className="review-content">
                A freelance site that offers various opportunities in fields of
                work such as design, programming, and telephone, with a secure
                payment system and an easy interface, but it requires excellence
                to manage the fierce competition and bear the bank's currencies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
