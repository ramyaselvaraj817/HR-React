import React, { Fragment } from "react";
import SidePanel from "./SidePanel";
import Header from "./Header";
import "./Layout.css";

function Layout({ children }) {
  return (
    <Fragment>
      <div className="app">
        <div className="left-container">
          <SidePanel />
        </div>
        <div className="right-container">
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer className="footer">
            <p> VITS Portal</p>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
