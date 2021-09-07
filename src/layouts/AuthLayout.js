import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100vh',
    width: '100%',
  },
}));

const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.container}>{children}</Box>;
};

export default AuthLayout;
