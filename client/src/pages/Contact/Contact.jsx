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

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // إزالة رسالة الخطأ عند التعديل
  }

  function validate() {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;

    // تحقق من الحقول الفارغة
    Object.keys(form).forEach((key) => {
      if (!form[key] && key !== "category") {
        newErrors[key] = "This field is required";
      }
    });

    // تحقق من صحة البريد الإلكتروني
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Email is not valid. Must be @gmail.com or @yahoo.com";
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
        console.log("Email sent successfully!");
        muR.current.play();
        muR.current.currentTime = 0;

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          category: "Contact as a",
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
          <h1 className="title">Contact Informations</h1>
          <p>
            Information that allows access to people or companies, such as phone
            number, email, and address.
          </p>
        </div>
      </header>

      <div className="bottom">
        <div className="contact-form">
          <form action="" className="contact" onSubmit={submit}>
            <div className="first-line">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                name="firstName"
                onChange={handleChange}
                style={{
                  borderColor: errors.firstName ? "red" : "",
                }}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                name="lastName"
                onChange={handleChange}
                style={{
                  borderColor: errors.lastName ? "red" : "",
                }}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>

            <div className="second-line">
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                name="email"
                onChange={handleChange}
                style={{
                  borderColor: errors.email ? "red" : "",
                }}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <div className="phone">

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
                style={{
                  borderColor: errors.phone ? "red" : "",
                }}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
            </div>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              style={{
                borderColor: errors.category ? "red" : "",
              }}
            >
              <option value="Contact as a" disabled hidden>
                Contact as a
              </option>
              <option value="client">Client</option>
              <option value="Marketer">Marketer</option>
            </select>
            {errors.category && (
              <span className="error">{errors.category}</span>
            )}

            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write what you want"
              value={form.message}
              onChange={handleChange}
              style={{
                borderColor: errors.message ? "red" : "",
              }}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
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