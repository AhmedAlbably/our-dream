import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div>
      {/* <FontAwesomeIcon icon={faStar} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not found! 😊</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
