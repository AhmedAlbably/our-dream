import "./Contact.scss";
import Navbar from "../../components/NavBar/NavBar";
import { useRef, useState } from "react";
import axios from "axios";
import mu from "../../audio/mony.mp4";

const Contact = () => {
  const muR = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "Contact as a",
    message: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://our-dream-backend.vercel.app/sendemail",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Email sent successfully!");
        muR.current.play();
        muR.current.currentTime = 0;

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <section className="contact">
      <video src={mu} ref={muR} style={{ display: "none" }}></video>
      <header>
        <Navbar />
        <span className="cover"></span>
        <div className="content">
          <h1 className="title"> Contact Informations</h1>
          <p>
            Information that allows access to people or companies, such as phone
            number, email, and address.
          </p>
        </div>
      </header>

      <div className="bottom">
        <div className="contact-form">
          <div className="contact-information">
            <div className="overlay"></div>
          </div>

          <form action="" className="contact" onSubmit={submit}>
            <div className="first-line">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                required
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                required
                name="lastName"
                onChange={handleChange}
              />
            </div>

            <div className="second-line">
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                name="email"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone Number"
                maxLength="11"
                required
                value={form.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <select
              name="category"
              required
              value={form.category}
              onChange={handleChange}
            >
              <option value="Contact as a" disabled hidden>
                Contact as a
              </option>
              <option value="client">Client</option>
              <option value="Marketer">Marketer</option>
            </select>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Write what you want"
              required
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <button className="btn" onSubmit={submit}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
