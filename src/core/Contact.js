import React from "react";
import Layout from "./Layout";
import deskimg from "./../image/desk.jpg";
import Colors from "./Colors";
import { color } from "@mui/system";
import { contactApi } from "./apiCore";
import { useState } from "react";
export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    // formData: "",
  });

  const { name, email, phone, message } = values;

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    // formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  const clickSubmit =  (e) => {
    let details = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log("values",values);
    console.log(details);
    e.preventDefault();
    setValues({ ...values });

    contactApi(values).then((data) => {
      if (data.error) {
        console.log(data.error)
        // setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    });
  };

  return (
    <Layout>
      <div className="container" id="banner1">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div
              className="card my-4"
              style={{
                backgroundColor: "rgb(34 43 69)",
                borderBottom: "#F037A5",
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                borderRadius: 15,
                overflow: "hidden",
              }}
            >
              <div
                className="card-header text-center "
                style={{ backgroundColor: Colors.orange }}
              >
                <h3 className="text-center font-weight-bold text-white">
                  Contact Us
                </h3>
                <i
                  className="fa fa-envelope fa-4x text-center text-white"
                  aria-hidden="true"
                ></i>
                <p className="text-justify m-3 text-white">
                  Founded in 2022, Lukjury Travel is India’s leading online
                  travel marketplace bringing both the traveler and expert
                  Travel-Agents on a common platform.
                </p>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "rgb(34 43 69)",
                      borderBottom: "#F037A5",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                      boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",

                      overflow: "hidden",
                    }}
                  >
                    <h4 className="text-info">
                      <i
                        class="fa fa-thumb-tack fa-1x"
                        aria-hidden="true"
                        style={{ color: Colors.blue }}
                      ></i>{" "}
                      <span style={{ color: Colors.blue }}>Location</span>
                    </h4>
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "rgb(34 43 69)",
                      borderBottom: "#F037A5",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                      boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                      color: Colors.SubWhite,
                      overflow: "hidden",
                    }}
                  >
                    Lukjury Travel Agency
                  </li>
                  <li
                    className="list-group-item "
                    style={{
                      backgroundColor: "rgb(34 43 69)",
                      borderBottom: "#F037A5",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                      boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                      color: Colors.SubWhite,
                      overflow: "hidden",
                    }}
                  >
                    Indore, Madhya Pradesh
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "rgb(34 43 69)",
                      borderBottom: "#F037A5",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                      boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                      color: Colors.SubWhite,
                      overflow: "hidden",
                    }}
                  >
                    India, 452001
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div
              className="card my-4 px-3"
              style={{
                backgroundColor: "rgb(34 43 69)",
                borderBottom: "#F037A5",
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                borderRadius: 15,
                overflow: "hidden",
              }}
            >
              <h3
                className="p-2 text-center my-2 "
                style={{ color: Colors.orange }}
              >
                Please Fill Out this Form
              </h3>
              <form  onSubmit={clickSubmit}>
                <div className="form-group">
                  <label for="name" style={{ color: Colors.white }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    // name="name"
                    onChange={handleChange("name")}
                    value={name}
                    placeholder="Name"
                    // required="true"
                    pattern=".{1,}"
                  />
                </div>
                <div className="form-group">
                  <label for="email" style={{ color: Colors.white }}>
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={handleChange("email")}
                    value={email}
                    className="form-control"
                    // name="email"
                    placeholder="Email"
                    // required="true"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  />
                </div>
                <div className="form-group">
                  <label for="contact" style={{ color: Colors.white }}>
                    Contact No.
                  </label>
                  <input
                    type="text"
                    onChange={handleChange("phone")}
                    value={phone}
                    className="form-control"
                    // name="contact"
                    placeholder="Contact"
                    // required="true"
                    pattern=".{10}"
                  />
                </div>
                <div className="form-group">
                  <label for="message" style={{ color: Colors.white }}>
                    Message
                  </label>
                  <input
                    type="text"
                    onChange={handleChange("message")}
                    value={message}
                    className="form-control"
                    // name="message"
                    placeholder="message"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    // onSubmit={()=>console.log("wefffff")}
                    value="Submit"
                    name="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container card p-3"
        style={{
          backgroundColor: "rgb(34 43 69)",
          borderBottom: "#F037A5",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
          borderRadius: 15,
          overflow: "hidden",
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ color: Colors.orange }}>
              <b>
                <u>LIVE SUPPORT</u>
              </b>
            </h2>
            <h4 className="text-info">
              24 hours || 7 days a week || 365 days in a year Live Technical
              Support
            </h4>
            <p className="text-justify p-2" style={{ color: Colors.SubWhite }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters. There are many variants of passaages of
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage
              of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text.
            </p>
            <br />
            <button type="button" className="btn btn-primary btn-lg">
              Learn More
            </button>
          </div>
          <div className="col-md-6">
            <img src={deskimg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
