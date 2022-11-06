import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import ModalVideo from "react-modal-video";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import StarRating from "./StarRating";
import "./../../node_modules/react-modal-video/scss/modal-video.scss";
import Colors from "./Colors";
import { Typography } from "@mui/material";

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button
            className="btn  mt-2 mb-2 card-btn-1"
            id="view-product"
            style={{ backgroundColor: Colors.blue, color: Colors.white }}
          >
            More Info!
          </button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className="btn  mt-2 mb-2 card-btn-1 "
          id="add-to-cart"
          style={{ backgroundColor: Colors.orange, color: Colors.white }}
        >
          Book Now!
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span
        className="badge  badge-pill"
        style={{ backgroundColor: Colors.orange, color: Colors.white }}
      >
        In season
      </span>
    ) : (
      <span
        className="badge  badge-pill"
        style={{ backgroundColor: Colors.orange, color: Colors.white }}
      >
        Out of Season
      </span>
    );
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
    <div
      // className="border rounded shadow"

      style={{
        backgroundColor: "rgb(34 43 69)",
        borderBottom: "#F037A5",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        // boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
        borderRadius: 20,
        // overflow: "hidden",
        // border: `1.7px solid ${Colors.orange} !important`,
        // boxShadow: `  0px 3px 6px 0px ${Colors.orange} `,
        overflow: `hidden !important`,
        justifyContent: "center",
        alignItems: "center",
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
        <div className="view overlay">
          {shouldRedirect(redirect)}
          {/* <a href={product.youtubelink} data-toggle="lightbox" data-gallery="youtubevideos"> */}
          <ShowImage item={product} url="product" className="img-thumbnail" />
          <h5
            className="ml-2 text-success h5 font-weight-bold pb-2"
            style={{ color: Colors.orange,width:300}}
          >
            {product.name}
          </h5>
        </div>
        <div class="card-body m-0 p-0">
          <div className="d-flex justify-content-between mx-2 mb-0">
            <h6
              className="font-weight-bold h6"
              style={{
                fontWeight: "600",
                fontSize: "0.8em",
                color: Colors.white,
                width:200
              }}
            >
              {product.subname}
            </h6>
            <StarRating />
          </div>
          <div className="mt-2 px-3">
            <Typography
              variant="h4"
              className="badge  badge-pill shadow"
              style={{
                backgroundColor: Colors.realorange,
                color: Colors.white,
                fontSize: "0.8rem",
              }}
            >
              Price : ₹ {product.price}
            </Typography>
          </div>
        </div>
      </div>

      <div
        className="text-justify m-2 p-2"
        style={{ fontSize: "14px", fontWeight: "500" }}
      >
        <div style={{width:300}}>
          <p classname="text-justify" style={{ color: Colors.SubWhite }}>
            {product.description && product.description.substring(0, 400)}
          </p>
        </div>
        {showViewButton(showViewProductButton)}
        {showAddToCartBtn(showAddToCartButton)}
        {showRemoveButton(showRemoveProductButton)}
        {showCartUpdateOptions(cartUpdate)}
        <div className="d-flex justify-content-around p-2 m-0">
          <div className="m-0 p-0 mx-1">{showStock(product.quantity)}</div>

          <p
            className="text-info mx-1"
            style={{ fontWeight: "600", fontSize: "0.7em" }}
          >
            <span>Category: </span>
            {product.category && product.category.name}
          </p>
        </div>
        <div className="d-flex justify-content-around p-0 m-0">
          <p
            className="  mx-1"
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: Colors.realorange,
            }}
          >
            Added on {moment(product.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
