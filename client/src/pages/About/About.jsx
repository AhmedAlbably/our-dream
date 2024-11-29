import NavBar from "../../components/NavBar/NavBar";
import "./About.scss";

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
    </div>
  );
}

export default About;






