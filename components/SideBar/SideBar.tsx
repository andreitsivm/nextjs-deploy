import React from "react";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Button,
  IconButton,
  ListItem,
  Divider,
  List,
  Drawer,
} from "@material-ui/core";
import { useStyles } from "./Sidebar.styled";

const TemporaryDrawer: React.FC = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer(true)}
          edge="start"
          className=""
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link href="/">
                <Button>Posts</Button>
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link href="/posts/new">
                <Button>Create post</Button>
              </Link>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default TemporaryDrawer;
