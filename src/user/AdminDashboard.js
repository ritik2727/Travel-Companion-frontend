import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { ColorLens } from "@mui/icons-material";
import Colors from "../core/Colors";

const AdminDashboard = () => {
  const {
    // eslint-disable-next-line
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div
        className="card my-5 "
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
          className="card-header text-white"
          style={{ backgroundColor: Colors.orange }}
        >
          Admin Links
        </h4>
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/create/category"  style={{  color: Colors.white,}}>
              Create Category
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/create/product"  style={{  color: Colors.white,}}>
              Create Place
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/admin/orders"  style={{  color: Colors.white,}}>
              View place Orders
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/admin/products"  style={{  color: Colors.white,}}>
              Manage Places
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/admin/categories" style={{  color: Colors.white,}}>
              Manage categories
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/admin/users" style={{  color: Colors.white,}}>
              Manage Users
            </Link>
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            <Link className="nav-link" to="/admin/coupon" style={{  color: Colors.white,}}>
              Manage Coupons
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div
        className="card my-5 "
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
          className="card-header text-white"
          style={{ backgroundColor: Colors.orange }}
        >
          User Information
        </h3>
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            {name}
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            {email}
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
              overflow: "hidden",
            }}
          >
            {role === 1 ? "Admin" : "Registered User"}
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
        <div className="col-md-8 col-sm-12">{adminInfo()}</div>
        <div className="col-md-4 col-sm-8">{adminLinks()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
