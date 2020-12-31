import { AppBar } from "@material-ui/core";
import React from "react";

import { useStyles } from "./Footer.styled";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <AppBar style={{ height: "80px" }} position="static" />
    </footer>
  );
};

export default Footer;
