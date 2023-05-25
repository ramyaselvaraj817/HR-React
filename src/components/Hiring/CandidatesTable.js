import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  TextField,
  InputAdornment,
  Paper,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import StarIcon from "@material-ui/icons/Star";
import { data } from "../Helper/data";

function CandidatesTable() {
  const statuses = data.statuses;
  const jobOpenings = data.jobOpenings;
  const candidates = data.candidates;

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
      width: "200px",
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
  return (
    <div>
      <Toolbar>
        <TextField
          className={classes.textField}
          variant="outlined"
          placeholder="Search by keywords, name, location"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="subtitle2" color="grey">
          8 Candidates
        </Typography>
        <div className={classes.formControlParent}>
          <FormControl className={classes.formControl}>
            <InputLabel>Statuses</InputLabel>
            <Select>
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Job Listings</InputLabel>
            <Select>
              {jobOpenings.map((jobOpening) => (
                <MenuItem key={jobOpening} value={jobOpening}>
                  {jobOpening}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Toolbar>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#bdbdbd" }}>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#36454F",
                  }}
                >
                  Candidate Info
                </Typography>
              </TableCell>
              <TableCell style={{ backgroundColor: "#bdbdbd" }}>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#36454F",
                  }}
                >
                  Job Opening
                </Typography>
              </TableCell>
              <TableCell style={{ backgroundColor: "#bdbdbd" }}>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#36454F",
                  }}
                >
                  Status
                </Typography>
              </TableCell>
              <TableCell style={{ backgroundColor: "#bdbdbd" }}>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#36454F",
                  }}
                >
                  Rating
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    style={{ fontWeight: "bold", color: "#1976D2" }}
                  >
                    {candidate.name}
                  </Typography>
                  <Typography variant="body2">{candidate.address}</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    variant="subtitle2"
                    style={{ fontWeight: "bold", color: "#1976D2" }}
                  >
                    {candidate.jobOpening}
                  </Typography>
                </TableCell>
                <TableCell>{candidate.status}</TableCell>
                <TableCell>
                  {Array.from({ length: candidate.rating }).map((_, index) => (
                    <StarIcon key={index} className={classes.goldStar} />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CandidatesTable;
