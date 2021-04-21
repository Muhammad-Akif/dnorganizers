import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import img from "../images/abc.png"
import {NavLink} from "react-router-dom"
import { useRef } from 'react'
import firebase from '../config/firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        dnorganizers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    color: '#F14E95'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#F14E95',
    padding: "5px",
    fontSize: "14px",
    borderRadius: "15px"
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signIn = e => {
    e.preventDefault();
    let email = emailRef.current.value;
    let pass = passwordRef.current.value;
    console.log(`Email and Passwords are ==> ${email} & ${pass}`)
    firebase.auth().signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then(user => {
        console.log(user)
    }).catch(err => {
        console.log(err)
    })
  }
  return (
    <Container component="main" maxWidth="xs" className="login-comp">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <div className="fh5co-heading both animate-box">
            <h2>Sign in</h2>
          </div>
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            ref={emailRef}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            ref={passwordRef}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={signIn}
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/signup" variant="body2">
                No account? Sign Up
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}




