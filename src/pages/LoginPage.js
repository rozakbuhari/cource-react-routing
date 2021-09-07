import React from "react";
import {
  Box,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const useStyles = makeStyles((theme) => ({
  form: {
    width: 400,
    display: "flex",
    flexDirection: "column",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AuthLayout>
      <Box className={classes.form}>
        <Typography variant="h4" gutterBottom>
          Sign In to Your Application
        </Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Input your password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            localStorage.setItem('AUTH_TOKEN', new Date().toLocaleTimeString())
            history.push("/");
          }}
        >
          Sign In
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
