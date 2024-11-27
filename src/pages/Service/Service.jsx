import Navbar from "../../components/NavBar/NavBar"
import "./Service.scss";

const Service = () => {
  return (
    <section className="services">
      <header className="top">
        <Navbar />
        <div className="overlay"></div>
        <div className="our-services">
          <div className="triangle-left"></div>
          <div className="triangle-right"></div>
          <h1>Our Services</h1>
        </div>
      </header>

      <main className="main">
        <div className="up">We have over 20 years of experience</div>

        <div className="separator"></div>

        <div className="down">
          With more than 20 years of experience, we provide professional and
          integrated services in our field, focusing on achieving the highest
          levels of quality and meeting our customers’ needs with precision and
          professionalism.
        </div>
      </main>

      <section className="bottom">
        <div className="title">
          <p>Service we provide</p>
          <p>What we do for you</p>
        </div>

        <div className="cards">

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

      </section>
      
    </section>
  );
};

export default Service;
