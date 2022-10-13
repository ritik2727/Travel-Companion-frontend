import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/updateCategory";
import Gallerylook from "./core/Galleryimg";
import Team from "./core/Team";
import About from "./core/About";
import Contact from "./core/Contact";
import NewHeader from "./core/Header";
import Theme from "./core/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/styled-engine";
import ScrollToTop from "./core/ScrollToTop";
import ScrollTop from "./core/ScrollTop";
import Colors from "./core/Colors";
import NewFooter from "./core/NewFooter";

const Routes = (props) => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <div
            style={{
              backgroundColor: Colors.DarkBlue,
              height: "100%",
              width: "100%",
            }}
          >
            <ScrollTop showBelow={120} />
            <NewHeader
              {...props}
              value={value}
              setValue={setValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
            {/* <Header /> */}
            <ScrollToTop />
      
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/gallery" exact component={Gallerylook} />
              <Route path="/team" exact component={Team} />
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <PrivateRoute
                path="/user/dashboard"
                exact
                component={Dashboard}
              />
              <AdminRoute
                path="/admin/dashboard"
                exact
                component={AdminDashboard}
              />
              <AdminRoute
                path="/create/category"
                exact
                component={AddCategory}
              />
              <AdminRoute path="/create/product" exact component={AddProduct} />
              <Route path="/product/:productId" exact component={Product} />
              <Route path="/cart" exact component={Cart} />
              <AdminRoute path="/admin/orders" exact component={Orders} />
              <PrivateRoute path="/profile/:userId" exact component={Profile} />
              <PrivateRoute
                path="/admin/products"
                exact
                component={ManageProducts}
              />
              <AdminRoute
                path="/admin/product/update/:productId"
                exact
                component={UpdateProduct}
              />
              <AdminRoute
                path="/admin/category/update/:categoryId"
                exact
                component={UpdateCategory}
              />
            </Switch>
          
            <NewFooter/>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Routes;
