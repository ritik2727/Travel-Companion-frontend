import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import Corosal from "./Corosal";
import HomeIcon from "./HomeIcon";
import Gallery from "./GalleryimgHome";
import Colors from "./Colors";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingTop: "1em",
    paddingBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      paddingTop: "0.5em",
    },
  },
}));

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const classes = useStyles();
  /* eslint-disable no-unused-vars */
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="" description="" className="container-fluid m-0 p-0">
      <Corosal />
      <Search />
      <HomeIcon />

      <div className="pt-3">
        {/* <h2
          className="text-center h2 mt-3 mb-3"
          id="home-popularplace"
          style={{ color: Colors.white }}
        >
          <span style={{ color: Colors.orange }}>Popular </span>Places
        </h2>

        <Row>
          {productsBySell.map((product, i) => (
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 offset-xs-2 mb-3">
              <Card product={product} />
            </div>
          ))}
        </Row> */}
        <Grid
          container
          id="home-popularplace"
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.rowContainer}
        >
          <Grid item style={{ marginBottom: "5em", marginTop: "2em" }}>
            <Typography variant="h4" align="center">
            <span style={{ color: Colors.orange }}>Popular </span>Places
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            {productsBySell.map((product, i) => (
              <Grid item key={i}>
                <Card product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>

      {/* <h2
          className="text-center h2 mt-3 mb-3"
          style={{ color: Colors.white }}
        >
          <span style={{ color: Colors.orange }}>New </span>Places
        </h2>
       

       
        <div className="row">
          {productsByArrival.map((product, i) => (
            <Col key={i} sm={10} md={6} lg={5} xl={4}>
              <Card product={product} />
            </Col>
          ))}
        </div>  */}
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.rowContainer}
        >
          <Grid item style={{ marginBottom: "5em", marginTop: "2em" }}>
            <Typography variant="h4" align="center">
              <span style={{ color: Colors.orange }}>New </span>Places
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            {productsByArrival.map((product, i) => (
              <Grid item key={i}>
                <Card product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>

      <h2
        className="mb-3 p-3 text-center text-success font-weight-bold h2"
        id="homegallery"
        style={{ color: Colors.orange }}
      >
        Gallery
      </h2>
      <Gallery />
    </Layout>
  );
};

export default Home;
