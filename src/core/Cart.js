import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";
import Colors from "./Colors";
import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardInfo from "./CardInfo";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const Cart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h3
          className="h3 my-2 p-2 text-center  border-info rounded border"
          style={{ color: Colors.blue }}
        >
          You have {`${items.length}`} Dream destination.
        </h3>
        {items.map((product, i) => (
          <CardInfo
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h3
      className="border p-3 my-4 h3 rounded shadow text-center"
      style={{
        backgroundColor: "rgb(34 43 69)",
        borderColor: Colors.SubWhite,
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
        color: Colors.white,
      }}
    >
      Your Wishlist is empty. <br />
      <br />{" "}
      <Link to="/shop" className="text-info font-weight-bold h4">
        Look for places to visit
      </Link>
    </h3>
  );

  return (
    <Layout title="" description="" className="">
      <div
        align={matchesMD ? "center" : null}
        // align-items='center'
        // align='center'
        className={matchesMD ? "col " : "row mt-2 "}
      >
        <div className={matchesMD ? "col-10" : "col-4 offset-1"}>
          <div className="cart-product-details " >
            {items.length > 0 ? showItems(items) : noItemsMessage()}
          </div>
        </div>
        <div className={matchesMD ? "col-10" : "col-5 offset-1"}>
          <div
            className="my-4 card p-3"
            style={{
              backgroundColor: "rgb(34 43 69)",
              borderColor: Colors.SubWhite,
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
              color: Colors.white,
            }}
          >
            <h2
              className="my-2 p-3 border rounded shadow  text-center"
              style={{ color: Colors.orange }}
            >
              Your cart summary
            </h2>
            <hr />
            <Checkout products={items} setRun={setRun} run={run} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
