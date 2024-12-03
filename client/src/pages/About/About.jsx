import NavBar from "../../components/NavBar/NavBar";
import "./About.scss";
import pathImgs from "../../images/path";

function About() {
  return (
    <div className="about">
      <header>
        <NavBar />
        <span className="cover"></span>
        <p>
          It is the largest freelancing platform that connects entrepreneurs
          with freelancers around the world. We provide opportunities for
          collaboration in diverse fields such as design, programming, writing,
          and marketing, with the aim of enabling individuals and companies to
          achieve success and innovation easily.
        </p>
      </header>

      <section className="about-us">
        <div className="about-us-text">
          <h2>About Us <span></span></h2>
          <h3>A platform that combines creativity and achievement</h3>
          <p>
            It is a global freelancing platform that connects project owners
            with freelancers to perform tasks such as programming, design, and
            writing, with a secure payment system and a huge community of users.
          </p>
        </div>

        <div className="about-us-img">
          <div className="image">
          <img src={pathImgs.aboutUsImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
