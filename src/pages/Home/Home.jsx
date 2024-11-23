import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import pathImgs from "../../images/path"

function Home() {
  return (
    <div className="Home">
      <header>
        <img src={pathImgs.shadowImg} alt=""/>
        <NavBar />
        <div className="content">
          <div className="left-side">

          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
