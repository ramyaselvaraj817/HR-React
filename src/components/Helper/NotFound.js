import React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "../Layout/Layout";

function NotFound() {
  return (
    <React.Fragment>
      <Layout>
        <Typography
          variant="h5"
          style={{
            color: "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            backgroundColor: "white",
          }}
        >
          Work in Progress
        </Typography>
      </Layout>
    </React.Fragment>
  );
}

export default NotFound;
