import "./Contact.scss";
import Navbar from "../../components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "Contact as a",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1400,
      offset: 1,
    });
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
    const phoneRegex = /^01/;

    Object.keys(form).forEach((key) => {
      if (!form[key] && key !== "category") {
        newErrors[key] = "This field is required";
        toast.error(
          `${
            key === "phone"
              ? "Phone number"
              : key === "firstName"
              ? "First name"
              : key === "lastName"
              ? "Last Name"
              : key === "email"
              ? "Email"
              : key === "message"
              ? "Message"
              : key
          } is required`
        );
      }
    });

    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Email is not valid. Must be @gmail.com or @yahoo.com";
      toast.error(`Email is not valid.`);
    }

    if (form.category === "Contact as a") {
      newErrors.category = "Please select a category";
      toast.error(`Please select category`);
    }

    if (form.phone && !phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone number must start with 01";
      toast.error(`Phone number is not valid`);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // إذا لم تكن هناك أخطاء، اعتبر النموذج صالحًا
  }

  async function submit(e) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

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
        toast.success("Form submitted successfully");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          category: "Contact as a",
          message: "",
        });
      }
    } catch {
      toast.error("You wrote something wrong");
    }
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <section className="contact">
        <header>
          <Navbar />
          <span className="cover"></span>
          <div className="content"  data-aos="zoom-in">
            <h1 className="title">Contact Informations</h1>
            <p>
              Information that allows access to people or companies, such as
              phone number, email, and address.
            </p>
          </div>
        </header>

        <div className="bottom">
          <div className="contact-form" >
            <div className="contact-information"  data-aos="fade-right">
              <div className="overlay"></div>
            </div>
            <form action="" className="contact" onSubmit={submit}  data-aos="fade-up">
              <div className="first-line">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  name="firstName"
                  onChange={handleChange}
                  className={errors.firstName && "error"}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  name="lastName"
                  onChange={handleChange}
                  className={errors.lastName && "error"}
                />
              </div>

              <div className="second-line">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                  className={errors.email && "error"}
                  style={{
                    color:
                      errors.email ===
                        "Email is not valid. Must be @gmail.com or @yahoo.com" &&
                      "red",
                  }}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  name="phone"
                  onChange={(e) => {
                    const input = e.target.value;
                    if (/^\d*$/.test(input) && input.length <= 11) {
                      handleChange(e);
                    }
                  }}
                  className={errors.phone && "error"}
                />
              </div>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                style={{
                  borderColor: errors.category ? "red" : "",
                  color: errors.category ? "red" : "",
                }}
              >
                <option value="Contact as a" disabled hidden>
                  Contact as a
                </option>
                <option value="client">Client</option>
                <option value="Marketer">Marketer</option>
              </select>

              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Write what you want"
                value={form.message}
                onChange={handleChange}
                style={{
                  border: errors.message ? "1px solid red" : "",
                }}
                className={errors.message && "error"}
              ></textarea>

              <button className="btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

// if (response.status === 200) {
//   console.log("Email sent successfully!");
//   muR.current.play();
//   muR.current.currentTime = 0;

//   setForm({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
// }
// } catch (error) {
// console.error("Error:", error);
// }
// }
// return (
// <section className="contact">
// <video src={mu} ref={muR} style={{ display: "none" }}></video>
// <header>
//   <Navbar />
//   <span className="cover"></span>
//   <div className="content">
//     <h1 className="title"> Contact Informations</h1>
//     <p>
//       Information that allows access to people or companies, such as phone
//       number, email, and address.
//     </p>
//   </div>
// </header>

// <div className="bottom">
//   <div className="contact-form">
//     <div className="contact-information">
//       <div className="overlay"></div>
//     </div>

//     <form action="" className="contact" onSubmit={submit}>
//       <div className="first-line">
//         <input
//           type="text"
//           placeholder="First Name"
//           value={form.firstName}
//           required
//           name="firstName"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={form.lastName}
//           required
//           name="lastName"
//           onChange={handleChange}
//         />
//       </div>

//       <div className="second-line">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={form.email}
//           name="email"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           maxLength="11"
//           required
//           value={form.phone}
//           name="phone"
//           // onChange={handleChange}
//           onChange={(e) => {
//             const input = e.target.value;

//             if (/^\d*$/.test(input) && input.length <= 11) {
//               // setForm({ ...form, phone: e.target.value });
//               handleChange(e)
//             }
//           }}
//         />
//       </div>
//       <select
//         name="category"
//         required
//         value={form.category}
//         onChange={handleChange}
//       >
//         <option value="Contact as a" disabled hidden>
//           Contact as a
//         </option>
//         <option value="client">Client</option>
//         <option value="Marketer">Marketer</option>
//       </select>
//       <textarea
//         name="message"
//         id=""
//         cols="30"
//         rows="10"
//         placeholder="Write what you want"
//         required
//         value={form.message}
//         onChange={handleChange}
//       ></textarea>
//       <button className="btn" onSubmit={submit}>
//         Send Message
//       </button>
//     </form>
//   </div>
// </div>
// </section>
// );
// };

// export default Contact;
