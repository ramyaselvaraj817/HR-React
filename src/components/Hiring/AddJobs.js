import React, { useState } from "react";
import "./AddJobs.css";
import {
  TextField,
  InputLabel,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const AddJobs = () => {
  const [checkedItems, setCheckedItems] = useState({
    Fulltime: false,
    Parttime: false,
    Flex: false,
    Telecommute: false,
    Onsite: false,
  });
  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  const checkboxStyle = {
    color: "#1976D3", // Replace with your custom color code
    "&$checked": {
      color: "#1976D3", // Replace with your custom color code
    },
  };
  return (
    <div className="add-job-screen">
      <div className="left-container-jobs ">
        <div className="flex-section">
          <InputLabel htmlFor="job-name">
            {" "}
            <h4 className="font-color"> Job Name</h4>
          </InputLabel>
          <TextField
            label="Job Name"
            variant="outlined"
            className="text-box"
            fullWidth
          />
        </div>
        <div className="flex-section">
          <InputLabel htmlFor="date-posted">
            {" "}
            <h4 className="font-color">Date Posted </h4>
          </InputLabel>
          <TextField
            label="Date Posted"
            variant="outlined"
            className="text-box"
            fullWidth
          />
        </div>
        <div className="flex-section">
          <InputLabel htmlFor="description">
            {" "}
            <h4 className="font-color">Description </h4>
          </InputLabel>
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
        </div>
      </div>
      <div className="right-container-jobs">
        <div className="checkbox-section ">
          <InputLabel htmlFor="checkbox">
            {" "}
            <h4 className="font-color">Position Type</h4>
          </InputLabel>

          <FormGroup className="checkbox-container">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.Fulltime}
                  onChange={handleCheckboxChange}
                  name="Fulltime"
                  style={checkboxStyle}
                />
              }
              label="Full time"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.Parttime}
                  onChange={handleCheckboxChange}
                  name="Parttime"
                  style={checkboxStyle}
                />
              }
              label="Part time"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.Flex}
                  onChange={handleCheckboxChange}
                  name="Flex"
                  style={checkboxStyle}
                />
              }
              label="Flex"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.Telecommute}
                  onChange={handleCheckboxChange}
                  name="Telecommute"
                  style={checkboxStyle}
                />
              }
              label="Telecommute"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems.Onsite}
                  onChange={handleCheckboxChange}
                  name="Onsite"
                  style={checkboxStyle}
                />
              }
              label="On site"
            />
            {/* Add more checkboxes using the same structure */}
          </FormGroup>
          {/* <div className="flex-section">
            <InputLabel htmlFor="description">
              {" "}
              <h4 className="font-color">Requirements </h4>
            </InputLabel>
            <TextField
              label="Requirements"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />
          </div> */}
          <div className="flex-section">
            <InputLabel htmlFor="payrate">
              {" "}
              <h4 className="font-color"> Pay Rate</h4>
            </InputLabel>
            <TextField
              label="Pay Rate"
              variant="outlined"
              className="text-box"
              fullWidth
            />
          </div>
        </div>
        <div class="button-container">
          <button className="submit-btn">Submit for Approval</button>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
