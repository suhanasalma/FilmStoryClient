import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  CircularProggress,
  ListSubheader,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyles from "./sidebarStyles";
import redlogo from "../../../../Assets/BrandLogo/1.png";
import bluelogo from "../../../../Assets/BrandLogo/2.png";


const demoCategories = [
  { label: "Comedy", value: "comedy" },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Horror",
    value: "horror",
  },
  {
    label: "Animation",
    value: "animation",
  },
];
const categories = [
  { label: "Popular", value: "popular" },
  {
    label: "Top Rated",
    value: "top_rated",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? bluelogo : redlogo}
          alt="filmstory logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            to="/"
            key={value}
            className={classes.links}
          >
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  className={classes.genreImages}
                  src={redlogo}
                  alt=""
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            to="/"
            key={value}
            className={classes.links}
          >
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img
                  className={classes.genreImages}
                  src={redlogo}
                  alt=""
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
