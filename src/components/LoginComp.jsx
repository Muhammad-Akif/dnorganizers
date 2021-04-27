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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import img from "../images/abc.png"
import { NavLink } from "react-router-dom"
import firebase from '../config/firebase';
import {useHistory} from 'react-router-dom';

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

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function SignIn() {
  const classes = useStyles();

  const [email, setemail] = useState(null);
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isPasswordValidate, setIsPasswordValidate ] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, setpassword] = useState(null);
  const history = useHistory();


  const signIn = e => {
    e.preventDefault();
    console.log(`Email and Passwords are ==> ${email} & ${password}`)
    if (isEmailValidate && isPasswordValidate) {
      firebase.auth().signInWithEmailAndPassword(
        email,
        password
      ).then(data => {
        console.log(data)
        data?.user.email === "admin@gmail.com" ? history.push("/admin") : history.push("/user")
      }).catch(err => {
        console.log(err)
      })
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
            required={true}
            isRequired={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={onChangeInput.bind(null, "email")}
            autoComplete="email"
            autoFocus
          />
          {showError && (!isEmailValidate && (
            <div>This is a wrong email</div>
          ))}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={onChangeInput.bind(null, "password")}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {showError && ( !isPasswordValidate && (
            <div>Password length must be at least 6 characters</div>
          ))}
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




