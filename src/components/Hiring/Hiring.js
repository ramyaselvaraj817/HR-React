import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Layout from "../Layout/Layout";
import NoContent from "../Helper/NoContent";
import JobListings from "./JobListings";
import CandidatesTable from "./CandidatesTable";
import AddJobScreen from "./AddJobs";

const Hiring = () => {
  const [value, setValue] = useState(0);
  const useStyles = makeStyles((theme) => ({
    header: {
      flexGrow: 1,
      // height: "60px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    tabs: {
      "& .MuiTabs-flexContainer": {
        width: "100%", // Make the TabList occupy the entire screen width
      },
      width: "100%",
      flexGrow: 1,
    },
    tab: {
      backgroundColor: "#e0e0e0",
      "&.Mui-selected": {
        // backgroundColor: "#fff",
        border: "none",
      },
    },
    content: {
      // backgroundColor: "#fff",
      padding: theme.spacing(2),
      height: "100%",
      flex: 1,
    },
    loginButton: {
      marginLeft: "auto",
      color: "#bdbdbd",
    },
    spanStyle: {
      fontSize: "14px",
      color: "black",
    },
    circleIcon: {
      fontSize: "40px",
    },
    root: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      margin: theme.spacing(1),
      width: "100%",
      color: "white", // Change the text color here
      fontSize: "14px",
      fontFamily: "Arial",
      fontWeight: "normal",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      textAlign: "right",
    },
    title: {
      flexGrow: 1,
      fontSize: "25px",
      color: "#1976D2",
    },
    appBar: {
      backgroundColor: "white", // Change the background color here
    },
    tabLabel: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    toolbar: {
      justifyContent: "space-between",
    },
    formControl: {
      width: "200px", // Adjust the width as needed
      //marginRight: theme.spacing(2), // Add margin if desired
    },
    formControlParent: {
      display: "flex",
      justifyContent: "flex-end",
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
          borderBottom: `1px solid #1976D2`,
          padding: "none",
        },
        "&.Mui-focused fieldset": {
          borderBottomColor: "#1976D2",
        },
      },
    },
    goldStar: {
      color: "gold",
    },
  }));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const indicatorStyles = {
    color: "#1976D2",
    backgroundColor: "#1976D2", // Change this to the desired color
    height: 3, // Change this to the desired height
  };
  const startIconStyle = {
    fontSize: "17px",
    paddingRight: "10px",
  };
  const classes = useStyles();

  return (
    <div>
      <Layout>
        <div className={classes.container}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            TabIndicatorProps={{
              style: indicatorStyles,
            }}
          >
            <Tab
              label={
                <div className={classes.tabLabel}>
                  <Icon style={startIconStyle}>work</Icon>{" "}
                  <Typography
                    variant="subtitle2"
                    style={{ textTransform: "none" }}
                  >
                    Job Listings
                  </Typography>
                </div>
              }
              style={{
                color: value === 0 ? "#1976D2" : "grey",
              }}
            />
            <Tab
              label={
                <div className={classes.tabLabel}>
                  <Icon style={startIconStyle}>people</Icon>{" "}
                  <Typography
                    variant="subtitle2"
                    style={{ textTransform: "none" }}
                  >
                    Candidates
                  </Typography>
                </div>
              }
              style={{
                color: value === 1 ? "#1976D2" : "grey",
              }}
            />
            <Tab
              label={
                <div className={classes.tabLabel}>
                  <Icon style={startIconStyle}>group</Icon>{" "}
                  <Typography
                    variant="subtitle2"
                    style={{ textTransform: "none" }}
                  >
                    Add Jobs
                  </Typography>
                </div>
              }
              style={{
                color: value === 2 ? "#1976D2" : "grey",
              }}
            />
          </Tabs>

          {value === 0 && (
            <Typography component="div" style={{ padding: 8 * 3 }}>
              <JobListings />
            </Typography>
          )}
          {value === 1 && (
            <Typography component="div" style={{ padding: 8 * 3 }}>
              <CandidatesTable />
            </Typography>
          )}
          {value === 2 && (
            <Typography
              component="div"
              style={{
                padding: 8 * 3,
                background: "white",

                height: "100%",
              }}
            >
              <AddJobScreen />
            </Typography>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Hiring;
