import React from "react";
import Typography from "@material-ui/core/Typography";
import "./NoContent.css";

function NoContent() {
  return (
    <div className="no-content">
      <Typography variant="h5" style={{ color: "grey" }}>
        Work in Progress
      </Typography>
    </div>
  );
}

export default NoContent;
