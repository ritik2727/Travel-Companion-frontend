import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
import Card from "./Card";
import "./../CSS/search.css";
import Colors from "./Colors";

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


const Search = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error && data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchData = () => {
    // console.log(search, category);
    if (search) {
      list({ search: search || undefined, category: category }).then(
        (response) => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return `Found ${results.length} products`;
    }
    if (searched && results.length < 1) {
      return `No products found`;
    }
  };

  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2
          className="my-3 p-3 text-center "
          style={{
            color: Colors.orange,
          }}
        >
          {searchMessage(searched, results)}
        </h2>

        <Grid
          container
          id="home-popularplace"
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.rowContainer}
        >
        
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
              {results.map((product, i) => (
              <Grid item key={i}>
                <Card product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* <div className="row">
          {results.map((product, i) => (
            <div className="col-md-3 col-sm-6 col-xs-8 offset-xs-2 mb-3">
              <Card key={i} product={product} />
             </div>
          ))}
        </div> */}
      </div> 
    );
  };

  const searchForm = () => (
    <div id="search" className="w-100 p-3 pb-5 mt-1">
      <Typography
        variant="h3"
        className="h2 mb-2 text-center"
        style={{ color: Colors.white }}
      >
        Search Destination
      </Typography>
      <div className="d-flex justify-content-center">
        <form onSubmit={searchSubmit} className="">
          <span
            className="input-group-text"
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
            <div className="input-group input-group-lg">
              <div className="col-sm-6 col-xs-12 col-md-6">
                <select
                  className="btn mr-2"
                  onChange={handleChange("category")}
                  id="category-select"
                  style={{
                    color: Colors.white,
                    backgroundColor: "rgb(34 43 69)",
                    borderBottom: "#F037A5",
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
                    borderRadius: 15,
                    overflow: "hidden",
                  }}
                >
                  <option value="All" id="option-search">
                    All
                  </option>
                  {categories.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-6 col-xs-12 col-md-6">
                <input
                  type="search"
                  className="form-control"
                  id="search-by-name"
                  onChange={handleChange("search")}
                  placeholder="Search by name"
                />
              </div>
              <div
                className="input-group d-block ml-2 col-xs-6 col-sm-4 col-md-3 mx-auto"
                style={{ border: "none" }}
              >
                <button
                  className="btn my-2 btn btn-block"
                  style={{
                    backgroundColor: Colors.orange,
                    color: Colors.white,
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </span>
        </form>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="container-fluid">{searchForm()}</div>
      <div className="container-fluid pb-3">{searchedProducts(results)}</div>
    </div>
  );
};

export default Search;
