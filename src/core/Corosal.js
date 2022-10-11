import Carousel from "react-bootstrap/Carousel";
import React from "react";
import img1 from "./../image/resort4.jpg";
import img2 from "./../image/resort5.jpg";
import img3 from "./../image/resort6.jpg";
import "./../CSS/Corosal.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Colors from "./Colors";

export default function Corosal() {
  return (
    <Carousel className="container-fluid mt-1 p-0">
      <Carousel.Item className="vertical-center">
        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
        <Carousel.Caption className="corosal-caption-center justify-content-end">
          <div className="text-right">
            <Typography variant="h3" style={{ color: Colors.white }}>
              We Work With All Budgets
            </Typography>
            <Typography
              variant="h3"
              style={{ color: Colors.orange }}
              className="d-block w-100 h5"
            >
              Book a ticket and just leave.
            </Typography>
            <button style={{backgroundColor:Colors.orange}} className="btn  btn-md text-white mt-2">
              <Link to="/contact" className="text-white">
                contact us
              </Link>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vertical-center">
        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />
        <Carousel.Caption className="corosal-caption-center justify-content-start">
          <div className="text-left">
            <Typography variant="h3" style={{ color: Colors.white }}>
              Group & Individual Gataways Experience.{" "}
            </Typography>
            <Typography
              variant="h3"
              style={{ color: Colors.orange }}
              className="d-block w-100 h5"
            >
              Tourism. These are as education in themselves
            </Typography>
            <button style={{backgroundColor:Colors.orange}} className="btn btn-success btn-md text-white mt-2">
              <Link to="/contact" className="text-white">
                contact us
              </Link>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vertical-center">
        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />
        <Carousel.Caption className="corosal-caption-center justify-content-center">
          <div className="text-center">
            <Typography variant="h3" style={{ color: Colors.white }}>
              Take Your Dream Vacation
            </Typography>
            <Typography
              variant="h3"
              style={{ color: Colors.orange }}
              className="d-block w-100 h5"
            >
              Adventure awaits, go find it.
            </Typography>
            <button style={{backgroundColor:Colors.orange}} className="btn btn-success btn-md text-white mt-2">
              <Link to="/contact" className="text-white">
                contact us
              </Link>
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
