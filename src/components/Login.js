import { React, useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "green",
  },
  button: {
    margin: "8px 0px",
  },
  textfield: {
    margin: "6px 0px",
  },
});

const Login = () => {

  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = console.log({ email, password });

  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <h2>SIGN IN</h2>
        </Grid>
        <TextField
          label="email"
          placeholder="Enter email"
          className={classes.textfield}
          fullWidth
          required
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          label="password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.button}
          fullWidth
          onClick={handleClick}
        >
          SIGN IN
        </Button>
        <Typography>
          Do you have an account? <Link href="#">Sign Up</Link>
        </Typography>
        <h1>
          email: {email}, password: {password}
        </h1>
      </Paper>
    </Grid>
  );
};

export default Login;
