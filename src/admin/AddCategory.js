import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import { ColorLens } from "@mui/icons-material";
import Colors from "../core/Colors";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryFom = () => (
    <div
      className="card p-3 my-4"
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
      <form onSubmit={clickSubmit}>
        <div className="form-group">
          <label className="text" style={{ color: Colors.white }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            autoFocus
            required
          />
        </div>
        <button
          className="btn "
          style={{ backgroundColor: Colors.orange, color: Colors.white }}
        >
          Create Category
        </button>
      </form>
    </div>
  );

  const showSuccess = () => {
    if (success) {
      return (
        <h3
          className="text my-2 p-2 border shadow border-success rounded"
          style={{ color: Colors.orange }}
        >
          {name} is created
        </h3>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <h3 className="text my-2 p-2 border shadow border-danger rounded" style={{color:Colors.danger}}>
          Category should be unique
        </h3>
      );
    }
  };

  const goBack = () => (
    <div className="my-5">
      <Link
        to="/admin/dashboard"
        className="text p-3 my-3 border-warning border"
        style={{color:Colors.realorange}}
      >
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title="Add a new category"
      description={`G'day ${user.name}, ready to add a new category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newCategoryFom()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
