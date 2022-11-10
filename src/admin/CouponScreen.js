import React, { useEffect, useState } from "react";
import { Button, Form, Row, Table } from "react-bootstrap";
import FormContainer from "../core/FormContainer";
// import Message from "../components/Message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Loader from "../components/Loader";
import ItemSearch from "../core/ItemSearch";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createCoupon,
//   deleteCoupon,
//   listCoupon,
// } from "../actions/couponActions";
import { listCoupon, deleteCoupon, createCoupon } from "./apiAdmin";
import { useAlert } from "react-alert";

import Colors from "../core/Colors";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { signout, isAuthenticated } from "../auth";
// import { Divider, Typography } from "@mui/material";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import "./ManageUser.css";
const CouponScreen = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const navigate = useHistory();
  const alert = useAlert();
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState(new Date());
  const [discount, setDiscount] = useState("");
  const [keyword, setKeyword] = useState("");
  //   const dispatch = useDispatch();
  const [coupons, setCoupons] = useState([]);
  //check logged in user
  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  const { user, token } = isAuthenticated();

  //   const couponCreate = useSelector((state) => state.couponCreate);
  //   const { loading, success, error } = couponCreate;

  //   const couponList = useSelector((state) => state.couponList);
  //   const { loading: loadingList, coupons, error: errorList } = couponList;

  //   const couponDelete = useSelector((state) => state.couponDelete);
  //   const {
  //     loading: loadingDelete,
  //     success: successDelete,
  //     error: errorDelete,
  //   } = couponDelete;

  const loadProducts = () => {
    listCoupon(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("dqqw", data);
        setCoupons(data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  //   useEffect(() => {
  //     if (user && user.isAdmin) {
  //       loadProducts();
  //       //   if (success) {
  //       //     alert.success("Coupon Created");
  //       //     setName("");
  //       //     setExpiry(new Date());
  //       //     setDiscount("");
  //       //     dispatch({ type: COUPON_CREATE_RESET });
  //       //   }
  //       //   if (successDelete) {
  //       //     alert.success(successDelete);
  //       //     dispatch({ type: COUPON_DELETE_RESET });
  //       //   }
  //     } else {
  //       navigate.push("/signin");
  //     }
  //   }, [ user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    createCoupon(user._id, token, { name, expiry, discount }).then((data) => {
      if (!data.error) {
        alert.success("Coupon Created");
        loadProducts();
        setName("");
        setExpiry(new Date());
        setDiscount("");
      }

      // if (data.error) {
      //   setValues({ ...values, error: data.error });
      // } else {
      //   setValues({
      //     ...values,
      //     name: "",
      //     subname: "",
      //     youtubelink: "",
      //     description: "",
      //     photo: "",
      //     price: "",
      //     quantity: "",
      //     loading: false,
      //     createdProduct: data.name,
      //   });
      // }
    });
  };

  const deleteHandler = (couponId) => {
    if (window.confirm("Are You Sure?")) {
      //   dispatch(deleteCoupon(id));
      deleteCoupon(couponId, user._id, token).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          loadProducts();
        }
      });
    }
  };

  const searched = (keyword) => (item) =>
    item.name.toLowerCase().includes(keyword);

  return (
    <>
      <FormContainer>
        {/* {error && <Message variant="danger">{error}</Message>} */}
        <Form onSubmit={handleSubmit} className="my-5">
          <Form.Group controlId="name" style={{ marginBottom: "1em" }}>
            <Form.Label style={{ color: Colors.white }}>Coupon (min:6 and max:12 words)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Coupon"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="expire" style={{ marginBottom: "1em" }}>
            <Form.Label style={{ color: Colors.white }}>Expire</Form.Label>
            <DatePicker
              selected={expiry}
              onChange={(date) => setExpiry(date)}
            />
          </Form.Group>
          <Form.Group controlId="discount" style={{ marginBottom: "1em" }}>
            <Form.Label style={{ color: Colors.white }}>Discount %</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter discount (%)"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              min="0"
              max="100"
            ></Form.Control>
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="my-3"
            style={{ backgroundColor: Colors.orange }}
            // disabled={loading}
          >
            Create Coupon
            {/* {loading && <Loader size="size-sm" />} */}
          </Button>
        </Form>
      </FormContainer>
      <div style={{ marginBottom: "14em", marginTop: "2em" }}>
        <Typography style={{ textAlign: "center" }} variant="h3">
          Total {coupons.length} Coupons
        </Typography>

        <Divider />
        <div  style={{display: 'flex', justifyContent: 'center'}}>
        <ItemSearch setKeyword={setKeyword} keyword={keyword} />
        </div>
        <div>
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
                {/* <th style={{color:Colors.white}}>ID</th> */}
                <th style={{ color: Colors.white }}>NAME</th>
                <th style={{ color: Colors.white }}>Expiry</th>
                <th style={{ color: Colors.white }}>Discount Rate (%)</th>
                <th style={{ color: Colors.white }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {coupons.filter(searched(keyword)).map((coupon) => (
                <tr key={coupon._id}>
                  {/* <td data-column="ID">{data._id}</td> */}
                  <td data-column="NAME">{coupon.name}</td>
                  <td data-column="Expiry">
                    {new Date(coupon.expiry).toLocaleDateString()}
                  </td>
                  <td data-column="Discount Rate (%)">{coupon.discount}%</td>
                  <td data-column="ACTION">
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(coupon._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Row>
        <ItemSearch setKeyword={setKeyword} keyword={keyword} />
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm"
          variant="dark"
          style={{
            backgroundColor: "rgb(34 43 69)",
            borderColor: Colors.SubWhite,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
            boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
            color: Colors.white,
          }}
        >
          <thead>
            <tr>
              <th>NAME</th>
              <th>Expiry</th>
              <th>Discount Rate (%)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {coupons.filter(searched(keyword)).map((coupon) => (
              <tr key={coupon._id}>
                <td>{coupon.name}</td>
                <td>{new Date(coupon.expiry).toLocaleDateString()}</td>
                <td>{coupon.discount}%</td>
                <td>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(coupon._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row> */}
    </>
  );
};

export default CouponScreen;
