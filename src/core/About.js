import React from "react";
import Layout from "./Layout";
import aboutimg from "./../image/about.png";
import { Link } from "react-router-dom";
import Colors from "./Colors";

export default function about() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-4 mb-2">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
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
                className="card m-2 "
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
                <h5
                  className="m-0 text-white font-weight-bold card-header "
                  style={{ backgroundColor: Colors.orange }}
                >
                  <i class="fa fa-tree" aria-hidden="true"></i>
                  <span> WHO ARE WE</span>
                </h5>
                <img src={aboutimg} alt="" />
                <div class="card-body m-0 p-0">
                  <p
                    className="text-justify p-3"
                    style={{ color: Colors.SubWhite }}
                  >
                    Lukjury Travel is an Indian Tourism website created by
                    university Students. It is the design to get place in the
                    top tourism website in India. Lukjury Travel started as a
                    mini project, but intended to become a major project.
                    Lukjury Travel will provide many tourism packages in
                    upcoming years. Lukjury Travel aim to have a website with
                    different language support for different regions of the
                    country and also allowing booking to places of different
                    countries also. Most travel websites charges international
                    charges for certain booking when opting internationally, but
                    we aim to provide booking free of any international charges
                    across the globe without a single penny. We also aim to have
                    branches in many countries and we shall provide facility of
                    user interest as per their needs. We aim to deal with the
                    best hotels , motels and lauge, so we provide quality
                    services to our costumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
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
                className="card m-2 "
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
                <h5
                  className="m-0 text-white font-weight-bold card-header  text-uppercase"
                  style={{ backgroundColor: Colors.orange }}
                >
                  <i class="fa fa-history" aria-hidden="true"></i> Our History
                </h5>
                <div class="card-body m-0 p-0 mt-2">
                  <a href="#" className="p-3 font-weight-bold text-warning">
                    <i class="fa fa-clock-o" aria-hidden="true"></i> ---2022---
                  </a>
                  <p
                    className="text-justify p-3"
                    style={{ color: Colors.SubWhite }}
                  >
                    Lukjury Travel website is created by Paritosh Soni, Satyam
                    Gupta , Mohit Devade and Ritik Jain (Students at SVVV
                    university),credited with developing the predecessor to
                    online website. The motivation behind is Most travel
                    websites charges international charges for certain booking
                    when opting internationally, but we aim to provide booking
                    free of any international charges across the globe without a
                    single penny. We also aim to have branches in many countries
                    and we shall provide facility of user interest as per their
                    needs. We aim to deal with the best hotels , motels and
                    lauge, so we provide quality services to our costumers.
                    <br />
                    <a href="#" className="font-weight-bold text-info">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> ---
                      November 2022---
                    </a>
                    <br />
                    In the November 2022, Lukjury Travel website get Deployed to
                    various platform including github pages and heroku <br />
                    <a href="#" className="font-weight-bold text-success">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> --- April
                      2022---
                    </a>
                    <br />
                    In the September 2022, Lukjury Travel website get itself
                    developed by MERN Stack & Deployed to various platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
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
                className="card m-2 "
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
                <h5
                  className="m-0 text-white font-weight-bold card-header text-uppercase"
                  style={{ backgroundColor: Colors.orange }}
                >
                  <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
                  Developers
                </h5>
                <div class="card-body m-0 p-0">
                  <ul className="list-group">
                    <li
                      className="list-group-item  h6 font-weight-bold"
                      style={{
                        backgroundColor: "rgb(34 43 69)",
                        borderBottom: "#F037A5",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                        color:Colors.SubWhite,
                        overflow: "hidden",
                      }}
                    >
                      Paritosh Soni
                    </li>
                    <li
                      className="list-group-item  h6 font-weight-bold"
                      style={{
                        backgroundColor: "rgb(34 43 69)",
                        borderBottom: "#F037A5",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                        color:Colors.SubWhite,
                        overflow: "hidden",
                      }}
                    >
                      Satyam Gupta
                    </li>
                    <li
                      className="list-group-item  h6 font-weight-bold"
                      style={{
                        backgroundColor: "rgb(34 43 69)",
                        borderBottom: "#F037A5",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                        color:Colors.SubWhite,
                        overflow: "hidden",
                      }}
                    >
                      Mohit Devade
                    </li>
                    <li
                      className="list-group-item  h6 font-weight-bold"
                      style={{
                        backgroundColor: "rgb(34 43 69)",
                        borderBottom: "#F037A5",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                        color:Colors.SubWhite,
                        overflow: "hidden",
                      }}
                    >
                      Ritik Jain
                    </li>
                    <li
                      className="list-group-item text-danger h6 font-weight-bold text-center"
                      style={{
                        backgroundColor: "rgb(34 43 69)",
                        borderBottom: "#F037A5",
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                  
                        overflow: "hidden",
                      }}
                    >
                      <Link to="./team" className="text-danger">
                        <i class="fa fa-link" aria-hidden="true"></i>
                        &nbsp;&nbsp; meet our team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
