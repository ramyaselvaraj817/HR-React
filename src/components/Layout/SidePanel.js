import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import "./SidePanel.css";
import { data } from "../Helper/data";

function SidePanel({ children }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // State to handle the open/close state of the drawer
  const [open, setOpen] = React.useState(false);

  // Event handler for toggling the drawer
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleToggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  // const [isMobile, setIsMobile] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const buttons = data.buttons;
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 768);
      console.log("Resizing..." + window.innerWidth >= 768);
      console.log("hello hello" + (window.innerWidth >= 768));
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handlePanelMouseEnter = () => {
    if (isOn && !isExpanded) {
      setIsExpanded(true);
    }
  };
  const handlePanelMouseLeave = () => {
    if (isOn && isExpanded) {
      setIsExpanded(false);
    }
  };
  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };
  const useStyles = makeStyles((theme) => ({
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      margin: theme.spacing(1),
      minWidth: "200px",
      color: "white", // Change the text color here
      fontSize: "14px",
      fontFamily: "Arial",
      fontWeight: "normal",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "right",
      cursor: "pointer",
      transition: "width 0.3s ease",
      opacity: 1,
      transition: "opacity 0.3s ease",
      "&:hover": {
        minWidth: "10px",
        backgroundColor: "#131723", // Replace with your hover color
        color: "white", // Replace with your hover text color
      },

      "&$selected": {
        backgroundColor: "#131723", // Replace with your selected color
        color: "white", // Replace with your selected text color
      },
    },
  }));
  const classes = useStyles();
  const startIconStyle = {
    fontSize: "17px",
    marginRight: "15px",
  };
  const startIconBig = {
    fontSize: "25px",
  };
  const endIconStyle = {
    fontSize: "17px",
    display: "flex",
    marginLeft: "auto",
  };

  return (
    <React.Fragment>
      <div
        className={`side-panel ${!isExpanded ? "collapsed" : "expanded"}`}
        onMouseEnter={handlePanelMouseEnter}
        onMouseLeave={handlePanelMouseLeave}
      >
        <div class="logo-parent">
          <div class="logo">
            <img
              class="logoimg"
              width="45px"
              alt="Logo"
              height="40px"
              src="https://web.vitshr.com/assets/images/logos/V-logo.png"
            />
            <h3 class="logo-font">VITS</h3>
          </div>
          <div className={` ${isExpanded ? "show-switch" : "hide-switch"}`}>
            <Switch
              checked={isOn}
              onChange={handleToggle}
              onColor="#FFE5B4"
              offColor="#808080"
              checkedIcon={false}
              uncheckedIcon={false}
              className="custom-switch"
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              className={classes.button}
              variant="text"
              color="primary"
              component={Link}
              to={button.path}
            >
              <Icon style={startIconStyle}>{button.startIcon}</Icon>
              {isExpanded && button.label}
              <Icon style={endIconStyle}>{isExpanded && button.endIcon}</Icon>
            </Button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SidePanel;
