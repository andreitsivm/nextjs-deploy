import Link from "next/link";
import { AppBar } from "@material-ui/core/";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Navbar.styled";

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Blog
          </Typography>
          <Link href="/">
            <Button>Posts</Button>
          </Link>
          <Link href="/posts/new">
            <Button>Create post</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
