import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";
import Colors from "../core/Colors";

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLinks = () => {
    return (
      <div
        className="card mt-4"
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
        <h4
          className="card-header  text-white font-weight-bold text-center"
          style={{ backgroundColor: Colors.orange }}
        >
          User Links
        </h4>

        <ul className="list-group">
          <li
            className="list-group-item font-weight-bold"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              //   borderRadius: 15,
              overflow: "hidden",
            }}
          >
            <Link
              className="nav-link"
              to="/cart"
              style={{ color: Colors.white }}
            >
              <i class="fa fa-picture-o" aria-hidden="true">
                {" "}
              </i>{" "}
              My Wishlisted places
            </Link>
          </li>
          <li
            className="list-group-item font-weight-bold"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              //   borderRadius: 15,
              overflow: "hidden",
            }}
          >
            <Link
              className="nav-link"
              to={`/profile/${_id}`}
              style={{ color: Colors.white }}
            >
              <i class="fa fa-cog fa-spin fa-1x fa-fw"></i> Update My Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div
        className="card mb-5 mt-4"
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
          className="card-header text-white font-weight-bold text-center"
          style={{ backgroundColor: Colors.orange }}
        >
          User Information
        </h3>
        <ul className="list-group">
          <li
            className="list-group-item  text-info font-weight-bold"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",

              overflow: "hidden",
            }}
          >
            <i
              class="fa fa-user-circle"
              aria-hidden="true"
              style={{ color: Colors.white }}
            ></i>{" "}
            &nbsp; <span style={{ color: Colors.white }}>{name}</span>
          </li>
          <li
            className="list-group-item  text-info font-weight-bold"
            style={{
                backgroundColor: "rgb(34 43 69)",
                borderBottom: "#F037A5",
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                // borderRadius: 15,
                overflow: "hidden",
              }}
          >
            <i
              class="fa fa-envelope"
              aria-hidden="true"
              style={{ color: Colors.white }}
            ></i>{" "}
            &nbsp; <span style={{ color: Colors.white }}>{email}</span>
          </li>
          <li
            className="list-group-item  text-info font-weight-bold"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",

              overflow: "hidden",
            }}
          >
            <i
              class="fa fa-registered"
              aria-hidden="true"
              style={{ color: Colors.white }}
            ></i>{" "}
            &nbsp;
            <span style={{ color: Colors.white }}>
              {role === 1 ? "Admin" : "Registered Travelyaari User 😇"}
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div
        className="card mb-5"
        style={{
          backgroundColor: "rgb(34 43 69)",
          borderBottom: "#F037A5",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",

          overflow: "hidden",
        }}
      >
        <h3
          className="card-header text-white font-weight-bold text-center"
          style={{ backgroundColor: Colors.orange }}
        >
          Purchase history
        </h3>
        <ul className="list-group">
          <li
            className="list-group-item text-warning font-weight-bold"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",

              overflow: "hidden",
            }}
          >
            {history.map((h, i) => {
              return (
                <div>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div key={i}>
                        <h6 style={{color:Colors.SubWhite}}>Product name: {p.name}</h6>
                        <h6 style={{color:Colors.SubWhite}}>Product price: ₹{p.price}</h6>
                        <h6 style={{color:Colors.SubWhite}}>Purchased date: {moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`G'day ${name}!`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-4 col-sm-8">{userLinks()}</div>
        <div className="col-md-8 col-sm-12">
          {userInfo()}
          {purchaseHistory(history)}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
