import React, { Fragment, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import PayrollTimesheetGraph from "./PayrollTimesheetGraph";
import Layout from "../Layout/Layout";
import TimeSheet from "./TimeSheet";
import { data } from "../Helper/data";
import NoContent from "../Helper/NoContent";

const PayrollBenefits = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const useStyles = makeStyles((theme) => ({
    header: {
      flexGrow: 1,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    tabs: {
      "& .MuiTabs-flexContainer": {
        width: "100%",
      },
      width: "100%",
      flexGrow: 1,
    },
    tab: {
      backgroundColor: "#e0e0e0",
      "&.Mui-selected": {
        border: "none",
      },
    },
    content: {
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
      color: "white",
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
      backgroundColor: "white",
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
  const classes = useStyles();
  const indicatorStyles = {
    color: "#1976D2",
    backgroundColor: "#1976D2", // Change this to the desired color
    height: 3, // Change this to the desired height
  };
  const startIconStyle = {
    fontSize: "17px",
    paddingRight: "10px",
  };
  const candidates1 = data.candidatehours;
  return (
    <Layout>
      <Fragment>
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
                <Icon style={startIconStyle}>schedule</Icon>{" "}
                <Typography
                  variant="subtitle2"
                  style={{ textTransform: "none" }}
                >
                  TimeSheet Entry
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
                <Icon style={startIconStyle}>bar_chart</Icon>{" "}
                <Typography
                  variant="subtitle2"
                  style={{ textTransform: "none" }}
                >
                  TimeSheet Graph
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
                <Icon style={startIconStyle}>stars</Icon>{" "}
                <Typography
                  variant="subtitle2"
                  style={{ textTransform: "none" }}
                >
                  Benefits
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
            <TimeSheet />
          </Typography>
        )}
        {value === 1 && (
          <Typography component="div" style={{ padding: 8 * 3 }}>
            <PayrollTimesheetGraph candidates={candidates1} />
          </Typography>
        )}
        {value === 2 && (
          <Typography component="div" style={{ padding: 8 * 3 }}>
            <NoContent></NoContent>
          </Typography>
        )}
      </Fragment>
    </Layout>
  );
};

export default PayrollBenefits;
