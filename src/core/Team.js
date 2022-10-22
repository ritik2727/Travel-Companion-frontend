import React from "react";
import Layout from "./Layout";
import cap from "./../image/team/cap.jpg";
import Satyam from "./../image/team/img2.jpeg";
import Sachi from "./../image/team/img3.jpeg";
import Sarveshbg from "./../image/team/img-top1.jpeg";
import Satyambg from "./../image/team/img-top2.jpeg";
import Sachibg from "./../image/team/img-top3.jpeg";
import { AnimatedDiv } from "../core/animated";
import { Card, Button } from "react-bootstrap";
import { IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Colors from "./Colors";
import "./../CSS/team.css";

const teamdel = [
  {
    name: "Paritosh Soni",
    bgimage: Sarveshbg,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU",
    title: "MERN Stack | React Native",
    twitterlink: "https://twitter.com/ritik2727",
    gitlink: "https://github.com/ritik2727",
    linkind: "https://www.linkedin.com/in/ritik-jain-3b2208217/",
  },
  {
    name: "Mohit Devade",
    bgimage: Sachibg,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU",
    title: "MERN Stack | React Native",
    twitterlink: "https://twitter.com/ritik2727",
    gitlink: "https://github.com/ritik2727",
    linkind: "https://www.linkedin.com/in/ritik-jain-3b2208217/",
  },
  {
    name: "Satyam Gupta",
    bgimage: Satyambg,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU",
    title: "MERN Stack | React Native",
    twitterlink: "https://twitter.com/ritik2727",
    gitlink: "https://github.com/ritik2727",
    linkind: "https://www.linkedin.com/in/ritik-jain-3b2208217/",
  },
  {
    name: "Ritik Jain",
    bgimage: Sarveshbg,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU",
    title: "MERN Stack | React Native",
    twitterlink: "https://twitter.com/ritik2727",
    gitlink: "https://github.com/ritik2727",
    linkind: "https://www.linkedin.com/in/ritik-jain-3b2208217/",
  },
];
export default function Team() {
  return (
    <Layout>
      <section>
        <div className="container">
          <Typography
            variant="h4"
            align="center"
            style={{
              marginBottom: "1em",
              marginTop: "1.5em",
              fontSize: "2.7rem",
              fontFamily: "Pacifico",
              textTransform: "none",
              overflow:'visible'
            }}
          >
            Team{" "}
            <span style={{ color: Colors.orange, fontFamily: "Pacifico" }}>
              Lukjury{" "}
            </span>
          </Typography>
          <div className="row" >
            {teamdel.map((item, id) => (
              //   <AnimatedDiv
              //   style={{ borderRadius: 15 }}
              //   className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
              //   whileHover={{
              //     scale: 1.3,
              //     // boxShadow: "0px 0px 8px #1976D2",
              //   }}
              // >
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div
                  className="  my-3 p-2"
                  style={{
                    // backgroundColor: "rgb(34 43 69)",
                    // borderBottom: "#F037A5",
                    // backgroundImage:
                    //   "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    // boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                    // borderRadius: 15,
                    // overflow: "hidden",
                    borderRadius: 15,
                    backgroundColor: "transprant",
                    border: `1.7px solid ${Colors.orange} !important`,
                    boxShadow: ` 0 8px 15px 0 ${Colors.orange} `,
                    overflow: `hidden !important`,
                  }}
                >
                  <div
                    className="card profile-card-2"
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
                    <div className="card-img-block">
                      <img className="img-fluid" src={item.bgimage} alt="" />
                    </div>
                    <div
                      className="card-body pt-5"
                      style={{ overflow: "visible" }}
                    >
                      <img
                        src={item.img}
                        alt="profile"
                        className="profile"
                        style={{ overflow: "visible" }}
                      />
                      <Typography
                        variant="h5"
                        className="card-title font-weight-bold"
                        style={{ fontSize: "1.35rem" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ color: Colors.SubWhite }}
                      >
                        {item.title}
                      </Typography>
                      {/* <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-warning text-center">
                          {" "}
                          Data Science
                        </li>
                        <li className="text-warning text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div> */}
                      <div
                        className="text-center border-top border-success pt-3 pb-1"
                        id="logoofcard"
                      >
                        <a href={item.gitlink}>
                          <i
                            className="fab fa-github fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>{" "}
                        &nbsp;&nbsp;&nbsp;
                        <a href={item.twitterlink}>
                          <i
                            class="fab fa-twitter fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>{" "}
                        &nbsp;&nbsp;&nbsp;
                        <a href={item.linkind}>
                          {" "}
                          <i
                            class="fab fa-linkedin fa-2x"
                            aria-hidden="true"
                          ></i>
                        </a>
                        {/* &nbsp;&nbsp;&nbsp;
                      <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Sachibg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU" alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">
                      Mohit Devade
                    </h5>
                    <p className="card-text">Web Developer & java developer</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-warning text-center"> MS office</li>
                        <li className="text-warning text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      <a href="https://github.com/shsarv">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/sarveshroli">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/shsarv/">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Satyambg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU" alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">
                      Satyam Gupta
                    </h5>
                    <p className="card-text">Web Develope & Java Developer</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-warning text-center">JAVA</li>
                        <li className="text-warning text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      <a href="https://github.com/shsarv">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/sarveshroli">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/shsarv/">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="border shadow rounded my-3 p-2">
                <div className="card profile-card-2">
                  <div className="card-img-block">
                    <img className="img-fluid" src={Sachibg} alt="" />
                  </div>
                  <div className="card-body pt-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbp1qgSK2dShzDi1PNNsvplujvVIOW3nXyA&usqp=CAU" alt="profile" className="profile" />
                    <h5 className="card-title font-weight-bold">
                      Ritik Jain
                    </h5>
                    <p className="card-text">Web Developer & java developer</p>
                    <div className="p-2">
                      <h6 className="text-success border-bottom border-info font-weight-bold">
                        Skills
                      </h6>
                      <ul type="none">
                        <li className="text-warning text-center"> MS office</li>
                        <li className="text-warning text-center">
                          {" "}
                          Web Development
                        </li>
                        <p
                          className="text-justify px-3 py-2"
                          style={{ fontSize: "13px", color: "gray" }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque similique vitae accusantium sequi
                          explicabo rerum possimus, harum id repudiandae labore.
                        </p>
                      </ul>
                    </div>
                    <div
                      className="text-center border-top border-success pt-3 pb-1"
                      id="logoofcard"
                    >
                      <a href="https://github.com/shsarv">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://twitter.com/sarveshroli">
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                      </a>{" "}
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/shsarv/">
                        {" "}
                        <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://shsarv.medium.com/">
                        {" "}
                        <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
