import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from "react-router-dom"
import firebase from '../config/firebase';
import { useHistory } from 'react-router-dom';

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

export default function SignUp() {
  const classes = useStyles();

  // const [fname, setfname] = useState(null);
  // const [lname, setlname] = useState(null);
  const [email, setemail] = useState(null);
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, setpassword] = useState(null);
  const history = useHistory();

  const signUp = e => {
    e.preventDefault();
    console.log(`Email and Passwords are ==> ${email} & ${password}`)
    if (isEmailValidate && isPasswordValidate) {
      firebase.auth().createUserWithEmailAndPassword(
        email,
        password
      ).then(user => {
        console.log(user)
        history.push("/login")
      }).catch(err => {
        console.log("Error ==> ", err)
      })
      // setlname('')
      // setfname('')
      setemail('')
      setpassword('')
    } else {
      setShowError(true)
    }
  }
  const onChangeInput = (type, e) => {
    if (type == 'email') {
      setemail(e.target.value)
      setIsEmailValidate(validateEmail(e.target.value));
      return
    }
    setpassword(e.target.value)
    if (e.target.value.length >= 6) {
      setIsPasswordValidate(true);
    } else {
      setIsPasswordValidate(false);
    }

  }
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Container component="main" maxWidth="xs" className="login-comp">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <div className="fh5co-heading both animate-box">
            <h2>Sign up</h2>
          </div>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                variant="outlined"
                fullWidth
                id="firstName"
                value={fname}
                onChange={(e) => { setfname(e.target.value) }}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                required
                value={lname}
                onChange={(e) => { setlname(e.target.value) }}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                required
                value={email}
                onChange={onChangeInput.bind(null, "email")}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            {showError && (!isEmailValidate && (
              <div>This is a wrong email</div>
            ))}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                required
                value={password}
                onChange={onChangeInput.bind(null, "password")}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {showError && (!isPasswordValidate && (
              <div>Password length must be at least 6 characters</div>
            ))}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={signUp}
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to='/login' variant="body2">
                Already have account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}




