import React from "react";
import Link from "next/link";
import { AppBar, Container, Hidden } from "@material-ui/core/";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Navbar.styled";
import SideBar from "components/SideBar";
import { Dictionary, Routes } from "const";

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {Dictionary.BLOG}
            </Typography>
            <Hidden mdUp>
              <SideBar />
            </Hidden>
            <Hidden smDown>
              <Link href={Routes.MAIN}>
                <Button>{Dictionary.POST}</Button>
              </Link>
              <Link href={`${Routes.POSTS}${Routes.NEW}`}>
                <Button>{Dictionary.CREATE_NEW_POST}</Button>
              </Link>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navbar;
