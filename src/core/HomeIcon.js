import { Typography } from "@mui/material";
import React from "react";
import "./../CSS/HomeIcon.css";
import Colors from "./Colors";

export default function HomeIcon() {
  return (
    <section className="mb-3 pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-2">
            <div
              className="card-body text-center homeicon-shadow rounded "
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
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <Typography
                variant="h2"
                className="h2  m-2"
                style={{ color: Colors.white }}
              >
                Pick Where
              </Typography>
              <p  style={{ color: Colors.SubWhite }}>Feed your wanderlust.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div
              className="card-body text-center homeicon-shadow rounded "
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
              <i className="fa fa-building" aria-hidden="true"></i>
              <Typography
                variant="h2"
                className="h2  m-2"
                style={{ color: Colors.white }}
              >
                Travel Shop
              </Typography>
              <p style={{ color: Colors.SubWhite }}>Answer it Royally.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div
              className="card-body text-center homeicon-shadow rounded "
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
              <i class="fa fa-plane" aria-hidden="true"></i>
              <Typography
                variant="h2"
                className="h2  m-2"
                style={{ color: Colors.white }}
              >
                Fly Cheap
              </Typography>
              <p style={{ color: Colors.SubWhite }}>Dream. Explore. Discover.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
