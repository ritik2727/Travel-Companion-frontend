import React, { useState, useEffect, useContext } from "react";

import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  Tab,
  Tabs,
  SwipeableDrawer,
  Typography,
  Badge,
  Menu,
  MenuItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import {
  Toolbar,
  useScrollTrigger,
  ListItemText,
  InputBase,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link, withRouter } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
// import MenuIcon from '@material-ui/icons/Menu'
// import { ListItemText } from '@material-ui/core';
import SearchIcon from "@mui/icons-material/Search";
// import logo from "./../../assests/charpahiya.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { InputBase } from '@material-ui/core';

import { signout, isAuthenticated } from "../auth";
// eslint-disable-next-line
import { itemTotal } from "./cartHelpers";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import {
  ExpandLess,
  ExpandMore,
  Favorite,
  LocalMall,
  StarBorder,
} from "@mui/icons-material";
// import SearchBox from '../SearchBox';
import Colors from "./Colors";
import DashboardIcon from "@mui/icons-material/Dashboard";

// import { useDispatch, useSelector } from "react-redux";
// import SearchBox from "../SearchBox";

// import { logout } from "../../actions/userActions";
// import { Collapse } from "react-bootstrap";
import Collapse from "@mui/material/Collapse";
// import { auth } from '../../firebase'
// import { useHistory } from 'react-router';
// import HeaderV from './HeaderV';
// import { StateContext } from '../../context/StateContext';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5em",
    },
  },
  logo: {
    height: 25,
    // padding:'0.5em',
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      height: 20,
    },
    [theme.breakpoints.down("xs")]: {
      height: 20,
    },
  },
  logoContainer: {
    marginLeft: "6em",
    marginRight: "4em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "1em",
      marginLeft: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  tabContainer: {
    marginRight: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    // backgroundColor: Colors.BDark,
    backgroundColor: "rgb(34 43 69)",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      color: Colors.orange,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: Colors.white,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    // backgroundColor:'red',
    // borderColor:'yellow',
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    // backgroundColor: "white",
    backgroundColor: "rgb(34 43 69)",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    width: "17em",
    // padding:'1%'
  },
  drawerItem: {
    ...theme.typography.tab,
    color: Colors.white,
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: Colors.orange,
    "&:hover": {
      backgroundColor: Colors.orange,
    },
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "rgb(34 43 69)",
    borderBottom: "#F037A5",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
    boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
    paddingRight: "5%",
  },
  searchIcon: {
    padding: theme.spacing(0, 0.2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid black",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function NewHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  // const history = useHistory('');
  //   const navigate = useNavigate();
  // let history = useHistory();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  // const matches = useMediaQuery('(min-width:900px)');

  const [search, setSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  //   const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [anchorE2, setAnchorE2] = useState(null);
  const [openMenu2, setOpenMenu2] = useState(false);

  const [anchorE3, setAnchorE3] = useState(null);
  const [openMenu3, setOpenMenu3] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClick2 = (e) => {
    setAnchorE2(e.currentTarget);
    setOpenMenu2(true);
  };
  const handleClose2 = (e) => {
    setAnchorE2(null);
    setOpenMenu2(false);
  };

  const handleMenuItemClick2 = (e, i) => {
    setAnchorE2(null);
    setOpenMenu2(false);
    props.setSelectedIndex(i);
  };

  const handleClick3 = (e) => {
    setAnchorE3(e.currentTarget);
    setOpenMenu3(true);
  };
  const handleClose3 = (e) => {
    setAnchorE3(null);
    setOpenMenu3(false);
  };

  const handleMenuItemClick3 = (e, i) => {
    setAnchorE3(null);
    setOpenMenu3(false);
    props.setSelectedIndex(i);
  };

  const [opend, setOpend] = useState(false);

  const handleClickd = () => {
    setOpend(!opend);
  };

  const [openA, setOpenA] = useState(false);

  const handleClickA = () => {
    setOpenA(!openA);
  };

  const adminOptions = [
    {
      name: "About Us",
      link: "/about",
      activeIndex: 7,
      selectedIndex: 0,
    },
    {
      name: "Our Team",
      link: "/team",
      activeIndex: 7,
      selectedIndex: 1,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 7,
      selectedIndex: 2,
    },
  ];

  const routes = [
    {
      name: "Popular Places",
      href: "#home-popularplace",
      activeIndex: 1,
    },
    { name: "Gallery", href: "#homegallery", activeIndex: 2 },
  ];
  const routesAuth = [
    {
      name: "All places",
      link: "/Shop",
      activeIndex: 1,
    },
    { name: "Gallery", link: "/Gallery", activeIndex: 2 },
  ];
  const routesDas = [
    {
      name: "All places",
      link: "/Shop",
      activeIndex: 1,
    },
    { name: "Gallery", link: "/Gallery", activeIndex: 2 },
  ];
  const routesH = [{ name: "CARS", link: "/men", activeIndex: 0 }];

  useEffect(() => {
    [...adminOptions, ...routes, ...routesAuth].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/":
          props.setValue(0);
          break;
        case "/signin":
          props.setValue(3);
          break;
        case "/cart":
          props.setValue(4);
          break;
        case "/user/dashboard":
          props.setValue(8);
          break;
          case "/admin/dashboard":
            props.setValue(9);
            break;
        default:
          break;
      }
    });
  });

  const tabs = (
    <React.Fragment>
      {!isAuthenticated() && (
        <Tabs
          className={classes.tabContainer}
          value={props.value}
          onChange={handleChange}
          indicatorColor="#FFB319"
        >
          {routes.map((route, index) => (
            <a
              key={`${route}${index}`}
              href={route.href}
              style={{color: Colors.white, textDecoration: "none" }}
            >
              <Tab
                key={`${route}${index}`}
                className={classes.tab}
                // style={{color:'black'}}
                style={{ color: Colors.white,opacity:1, textDecoration: "none" }}
                label={route.name}
              />
            </a>
          ))}
        </Tabs>
      )}
      {isAuthenticated() && (
        <Tabs
          className={classes.tabContainer}
          value={props.value}
          onChange={handleChange}
          indicatorColor="#FFB319"
        >
          {routesAuth.map((route, index) => (
            <Tab
              key={`${route}${index}`}
              className={classes.tab}
              component={Link}
              // style={{color:'black'}}
              style={{ color: Colors.white, textDecoration: "none" }}
              to={route.link}
              label={route.name}
            />
          ))}
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <Tab
              className={classes.tab}
              component={Link}
              to="/user/dashboard"
              // style={{color:'black'}}
              style={{ color: Colors.white, textDecoration: "none" }}
              label="Dashboard"
            />
          )}

          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <Tab
              className={classes.tab}
              component={Link}
              to="/admin/dashboard"
              // style={{color:'black'}}
              label="Dashboard"
              style={{ color: Colors.white, textDecoration: "none" }}
            />
          )}
        </Tabs>
      )}

      {/* <SearchBox /> */}

      {isAuthenticated() && (
        <>
          {/* <HeaderV  user={props.user} /> */}
          <Button
            style={{ color: Colors.white }}
            aria-owns={anchorE2 ? "simple-menu2" : undefined}
            aria-haspopup={anchorE2 ? "true" : undefined}
            onMouseOver={(event) => handleClick2(event)}
            onClick={() => props.setValue(6)}
          >
            <AccountCircleIcon />
          </Button>
        </>
      )}
      {!isAuthenticated() && (
        <Button
          style={{ color: "black" }}
          component={Link}
          to="/signin"
          onClick={() => props.setValue(3)}
        >
          <Typography
            style={{
              fontFamily: "Raleway",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "1.3rem",
              color: Colors.white,
            }}
          >
            Login
          </Typography>
        </Button>
      )}

      <Button
        style={{ padding: "1%" }}
        component={Link}
        to="/cart"
        onClick={() => props.setValue(4)}
      >
        <Badge
          badgeContent={itemTotal()}
          style={{ overflow: "visible", zIndex: 1 }}
          color="error"
        >
          <LocalMall style={{ color: Colors.white }} />
        </Badge>
      </Button>

      <Button
        //   style={{ marginRight: "5%" }}
        aria-owns={anchorE3 ? "simple-menu3" : undefined}
        aria-haspopup={anchorE3 ? "true" : undefined}
        onMouseOver={(event) => handleClick3(event)}
        onClick={() => props.setValue(7)}
      >
        <DashboardIcon style={{ color: Colors.orange }} />
      </Button>

      <Menu
        id="simple-menu3"
        anchorEl={anchorE3}
        open={openMenu3}
        onClose={handleClose3}
        MenuListProps={{
          onMouseLeave: handleClose3,
        }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {adminOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick3(event, i);
              props.setValue(7);
              handleClose3();
            }}
            selected={i === props.selectedIndex && props.value === 7}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>

      {/* this menu for account */}
      <Menu
        id="simple-menu2"
        anchorEl={anchorE2}
        open={openMenu2}
        onClose={handleClose2}
        MenuListProps={{
          onMouseLeave: handleClose2,
        }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {/* {accountOptions.map((option, i) => ( */}
        <MenuItem
          // key={`${option}${i}`}
          // component={Link}
          // to="/profile"
          classes={{ root: classes.menuItem }}
          onClick={(event) => {
            handleMenuItemClick2(event, 0);
            props.setValue(6);
            handleClose2();
          }}
          selected={0 === props.selectedIndex && props.value === 6}
        >
          hey,{isAuthenticated() && isAuthenticated().user.name}
          {/* {userInfo && userInfo.name} */}
        </MenuItem>
   
        <MenuItem
          // key={`${option}${i}`}
          // component={Link}
          // to="/profile"
          classes={{ root: classes.menuItem }}
          // onClick={(event) => {

          // }}
          onClick={(event) =>
            signout(() => {
              history.push("/");
              handleMenuItemClick2(event, 2);
              // logoutHandler();
              props.setValue(6);
              handleClose2();
            })
          }
          selected={2 === props.selectedIndex && props.value === 6}
        >
          Logout
        </MenuItem>
        {/* ))} */}
      </Menu>

      {/* this for cars brands */}
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <div style={{ marginLeft: "5%" }}>{/* <SearchBox /> */}</div>

        <List disablePadding>
          {isAuthenticated() && isAuthenticated() ? //       style={{ //        variant="h4" //    <Typography //    <ListItem style={{ backgroundColor: "#d9dadb" }}> //  <ListItemText>
          //         fontSize: "1.5rem",
          //        fontFamily:'cursive',
          //         fontStyle: "italic",
          //         textTransform: "none",
          //         color: "black",
          //         fontWeight: 500,
          //       }}
          //       align="left"
          //     >
          //       hey, <span>{userInfo && userInfo.name}</span>
          //     </Typography>
          //   </ListItemText>
          // </ListItem>
          null : (
            <ListItem button>
              <ListItemText
                onClick={() => {
                  setOpenDrawer(false);
                  history.push("/signin");
                  //   na("/login");
                  props.setValue(3);
                }}
              >
                <Typography
                  style={{
                    color: Colors.white,
                    fontFamily: "Raleway",
                    fontWeight: 700,
                  }}
                >
                  Login/Sign Up
                </Typography>
              </ListItemText>
            </ListItem>
          )}
          <ListItem></ListItem>
          {!isAuthenticated() && (
            <>
              <a
                href="#home-popularplace"
                style={{
                  color: "rgb(34 43 69)",
                }}
              >
                <ListItem
                  //   key={`${route}${route.activeIndex}`}
                  divider
                  button
                  // component={Link}
                  // to="/accessories"
                  //   component={Link}
                  //   to={route.link}
                  //   selected={props.value === route.activeIndex}
                  classes={{ selected: classes.drawerItemSelected }}
                  onClick={() => {
                    setOpenDrawer(false);
                    props.setValue(2);
                  }}
                >
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem}
                  >
                    Popular Places
                  </ListItemText>
                </ListItem>
              </a>
              <a
                href="#homegallery"
                h
                style={{
                  color: "rgb(34 43 69)",
                }}
              >
                <ListItem
                  //   key={`${route}${route.activeIndex}`}
                  divider
                  button
                  // component={Link}
                  // to="/accessories"
                  //   component={Link}
                  //   to={route.link}
                  //   selected={props.value === route.activeIndex}
                  classes={{ selected: classes.drawerItemSelected }}
                  onClick={() => {
                    setOpenDrawer(false);
                    props.setValue(2);
                  }}
                >
                  <ListItemText
                    disableTypography
                    className={classes.drawerItem}
                  >
                    Gallery
                  </ListItemText>
                </ListItem>
              </a>
            </>
          )}
          {isAuthenticated() && (
            <>
              <ListItem
                //   key={`${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                to="/Shop"
                //   component={Link}
                //   to={route.link}
                //   selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(1);
                }}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  All places
                </ListItemText>
              </ListItem>

              <ListItem
                //   key={`${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                to="/Gallery"
                //   component={Link}
                //   to={route.link}
                //   selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(2);
                }}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  Gallery
                </ListItemText>
              </ListItem>
            </>
          )}

          <ListItem
            //   key={`${route}${route.activeIndex}`}
            divider
            button
            component={Link}
            to="/cart"
            //   selected={props.value === route.activeIndex}
            classes={{ selected: classes.drawerItemSelected }}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(4);
            }}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Cart
            </ListItemText>
          </ListItem>
          {/* {userInfo ? ( */}
          <React.Fragment>
            {/* <ListItem>
                <ListItemText>
                  <Typography
                    variant="body1"
                    style={{ color: "rgba(0,0,0,.3)", fontWeight: 500 }}
                  >
                    My Profile
                  </Typography>
                </ListItemText>
              </ListItem> */}

            {/* {routesV.map((route) => ( */}
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <ListItem
                //   key={`${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                to="/user/dashboard"
                //   selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(8);
                }}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  Dashboard
                </ListItemText>
              </ListItem>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <ListItem
                //   key={`${route}${route.activeIndex}`}
                divider
                button
                component={Link}
                to="/admin/dashboard"
                //   selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(9);
                }}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  Dashboard
                </ListItemText>
              </ListItem>
            )}
            {/* ))} */}
            {/* {userInfo && userInfo.isAdmin && ( */}
          
              <ListItem
                onClick={() => {
                  handleClickA();
                  props.setValue(7);
                }}
                //   key={`${route}${route.activeIndex}`}
                divider
                button
                //   component={Link}
                //   to={route.link}
                //   selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                // onClick={() => {
                //   setOpenDrawer(false);
                //   // props.setValue(route.activeIndex);
                // }}
              >
                <ListItemText disableTypography className={classes.drawerItem}>
                  More
                </ListItemText>
                {openA ? (
                  <ExpandLess style={{ color: Colors.white }} />
                ) : (
                  <ExpandMore style={{ color: Colors.white }} />
                )}
              </ListItem>
       
            {/* )} */}
            {/* ))} */}
            <Collapse in={openA} timeout="auto" unmountOnExit>
              <List dense disablePadding>
                {adminOptions.map((item, index) => (
                  <ListItem
                    key={index}
                    classes={{
                      root: classes.menuItem,
                      // selected: classes.drawerItemSelected,
                    }}
                    button
                    selected={
                      index === props.selectedIndex && props.value === 7
                    }
                    onClick={() => {
                      props.setValue(7);
                      // setMenuItemIndex(index);
                      setOpenDrawer(false);
                    }}
                    component={Link}
                    to={item.link}
                    // selected={props.value === item.activeIndex}
                  >
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Collapse>
            {isAuthenticated() && (
              <ListItem
                divider
                button
                // component={Link}
                // to="/estimate"
                classes={{
                  root: classes.drawerItemEstimate,
                  selected: classes.drawerItemSelected,
                }}
                onClick={() =>
                  signout(() => {
                    history.push("/");
                    setOpenDrawer(false);
                    props.setValue(6);
                  })
                }
                selected={props.value === 6}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  Logout
                </ListItemText>
              </ListItem>
            )}
          </React.Fragment>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        // sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        onClick={() => setOpenDrawer(!openDrawer)}
        // disableRipple
        style={{outline: 'none'}}
        disableFocusRipple
        // edge
        // disableFocusRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <Typography
                style={{ color: Colors.orange }}
                className="navbar-brand"
              >
                Lukjury Travel
              </Typography>
              {/* <img
                alt="company logo"
                src={logo}
                className={classes.logo}
                // style={{padding:'0.5em'}}
              /> */}
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default withRouter(NewHeader);
