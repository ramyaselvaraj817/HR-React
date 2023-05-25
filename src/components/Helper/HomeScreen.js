import React, { useState } from "react";
import "./HomeScreen.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "../Layout/Header";
import "react-tabs/style/react-tabs.css";

const HomeScreen = ({ children }) => {
  return (
    <div className="home-screen">
      <AppBarComponent />
      <div className="right-section-container">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default HomeScreen;
