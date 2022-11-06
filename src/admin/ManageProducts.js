import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import Colors from "../core/Colors";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  let history = useHistory();
  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
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
      <div className="row">
        <div className="col-12 my-3">
          <h2 className="text-center" style={{ color: Colors.orange }}>
            Total {products.length} Places
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
                <strong style={{ color: Colors.white }}>
                  {" "}
                  {p.name.length > 22
                    ? `${p.name.substring(0, 22)}...`
                    : p.name}
                </strong>

                <div className="row">
                  <div style={{ marginRight: "1rem" }}>
                    <button
                      className="badge  badge-pill"
                      onClick={() =>
                        history.push(`/admin/product/update/${p._id}`)
                      }
                      style={{
                        backgroundColor: Colors.realorange,
                        color: Colors.white,
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div>
                    <button
                      className="badge  badge-pill"
                      onClick={() => destroy(p._id)}
                      style={{
                        backgroundColor: Colors.danger,
                        color: Colors.white,
                      }}
                    >
                      {/* <span
                  onClick={() => destroy(p._id)}
                  className="badge  badge-pill"
                  style={{backgroundColor:Colors.danger,color:Colors.white}}
                > */}
                      Delete
                      {/* </span> */}
                    </button>
                  </div>
                </div>
                {/* <Link to={`/admin/product/update/${p._id}`}>
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
                <span
                  onClick={() => destroy(p._id)}
                  className="badge  badge-pill"
                  style={{
                    backgroundColor: Colors.danger,
                    color: Colors.white,
                  }}
                >
                  Delete
                </span> */}
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default ManageProducts;
