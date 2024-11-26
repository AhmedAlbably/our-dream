import "./Contact.scss";
import Navbar from "../../components/NavBar/NavBar";
const Contact = () => {
  return (
    <section className="contact">
      
      <div className="top">
        <Navbar />

        <div className="content">
          <h1 className="title"> Contact Informations</h1>
          <p className="content">
            Information that allows access to people or companies, such as phone
            number, email, and address.
          </p>
        </div>
      </div>

      <div className="bottom">
        <div className="contact-form">
          <div className="contact-information">
            <div className="overlay"></div>
          </div>

          <form action="" className="contact">
            <div className="first-line">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <div className="second-line">
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone Number" required />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write what you want"
              required
            ></textarea>
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
