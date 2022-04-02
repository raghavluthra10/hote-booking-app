import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      backgroundColor: "black",
      width: "100vw",
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.secondary.main,
      position: "fixed",
      zIndex: 100,
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    pagesDiv: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      marginRight: 50,
    },
  })
);

const Navbar: FC = () => {
  const classes = useStyles();

  const histor = useHistory();

  const redirectToLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    histor.push("/login");
    console.log("redirect");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.pagesDiv}>
            <Typography className={classes.title}>
              <Link to="/">Home</Link>
            </Typography>

            <Typography className={classes.title}>
              <Link to="/dashboard">Dashboard</Link>
            </Typography>

            <Typography className={classes.title}>
              <Link to="/lists">List</Link>
            </Typography>

            <Typography className={classes.title}>
              <Link to="/demo">Demo</Link>
            </Typography>
          </div>

          <Button color="inherit" variant="outlined" onClick={redirectToLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
