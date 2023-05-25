import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLoginButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "white",
    },
    header: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      flexGrow: 1,
      fontSize: "25px",
      color: "#1976D2",
    },
    spanStyle: {
      fontSize: "14px",
      color: "black",
    },
    loginButton: {
      marginLeft: "auto",
      color: "#bdbdbd",
    },
    circleIcon: {
      fontSize: "40px",
    },
  }));
  const classes = useStyles();
  return (
    <div className="app-bar-wrapper">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <h2 className={classes.title}>VITS HR</h2>
          <span className={classes.spanStyle}>
            Hi <strong>VITS HR</strong>
          </span>
          <IconButton
            edge="end"
            color="inherit"
            className={classes.loginButton}
            onClick={handleLoginButtonClick}
          >
            <AccountCircleIcon className={classes.circleIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Change Password</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
