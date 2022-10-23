import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
  getCategories,
  deleteCategory,
  getUsers,
  deleteUser,
} from "./apiAdmin";
// import { LinkContainer } from 'react-router-bootstrap'
import Colors from "../core/Colors";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import "./ManageUser.css";
import { Button } from "react-bootstrap";

const ManageUsers = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getUsers(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("dqqw", data);
        setProducts(data);
      }
    });
  };

  const destroy = (customerId) => {
    deleteUser(customerId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout
      title="Manage Products"
      description="Perform CRUD on products"
      className="container-fluid"
    >
      <div style={{ marginBottom: "14em", marginTop: "2em" }} >
        <Typography style={{ textAlign: "center" }} variant="h3">
          Total {products.length} Users
        </Typography>
        <Divider />
        <div >
          <table
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderBottom: "#F037A5",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              // borderRadius: 15,
              overflow: "hidden",
              width: matchesXS
                ? "20em"
                : matchesSM
                ? "21em"
                : matchesMD
                ? "55em"
                : "70em",
            }}
          >
            <thead>
              <tr>
                <th style={{color:Colors.white}}>ID</th>
                <th style={{color:Colors.white}}>NAME</th>
                <th style={{color:Colors.white}}>EMAIL</th>
                <th style={{color:Colors.white}}>ADMIN</th>
                <th style={{color:Colors.white}}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((data) => (
                <tr>
                  <td data-column="ID">{data._id}</td>
                  <td data-column="NAME">{data.name}</td>
                  <td data-column="Email">
                  <a href={`mailto:${data.email}`} style={{color:Colors.SubWhite}}>{data.email}</a>
                    </td>
                  <td data-column="ADMIN">
                    {" "}
                    {data.role ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td data-column="ACTION">
                  <Link to={`/admin/user/update/${data._id}`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </Link>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => destroy(data._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {/* <div className="row">
        <div className="col-12 my-3">
          <h2 className="text-center" style={{ color: Colors.orange }}>
            Total {products.length} Category
          </h2>
          <hr />
          <ul
            className="list-group"
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
            {products.map((p, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
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
                <strong style={{ color: Colors.white }}>{p.name}</strong>
                <Link to={`/admin/user/update/${p._id}`}>
                  <span
                    className="badge  badge-pill"
                    style={{
                      backgroundColor: Colors.realorange,
                      color: Colors.white,
                    }}
                  >
                    Update
                  </span>
                </Link>
                <button
                  className="badge  badge-pill"
                  onClick={() => destroy(p._id)}
                  style={{
                    backgroundColor: Colors.danger,
                    color: Colors.white,
                  }}
                >
            
                  Delete
           
                </button>
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div> */}


    </Layout>
  );
};

export default ManageUsers;
