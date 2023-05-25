import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "auto 1fr", // Creates a grid with two columns, first one takes the width of the content, second one takes the remaining space
  },
  menuIcon: {
    gridColumn: "1", // Positions the menu icon in the first column of the grid
    gridRow: "1", // Positions the menu icon in the first row of the grid
    alignSelf: "center", // Centers the menu icon vertically
  },
}));

const ResponsiveDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.menuIcon}
        edge="start"
        color="inherit"
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveDrawer;
