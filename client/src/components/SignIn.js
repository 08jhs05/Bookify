import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useHistory } from 'react-router-dom';
import { useContext, useState } from "react";

import { UserContext } from '../UserContext'

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'whitesmoke',
    borderRadius: '20px 0 0 20px',
    height: '100vh',
    width: '100%',
    margin: 0,
  },
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '30%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {

  const classes = useStyles();
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  })
  const {userName, setUserName} = useContext(UserContext);

  const [isError, setIsError] = useState(false);

  const validateUser = (event) => {
    event.preventDefault();
    
    axios.get('/api/users')
    .then(res => {
      for (const user of res.data) {
        if ( user.email === formValues.email && user.password === formValues.password) {
          setUserName(user.username);
          onClickFunc();
        }else{
          setIsError("Could not find matching email or password. Please enter again");
        }
      }
    })
    .catch(err => console.error(err));
  }

  const handleChange  = (event) => {
    const formValue = event.target.id;
    setFormValues((prev) => ({
      ...prev,
      [formValue]: event.target.value
    }))
  }
  const onClickFunc = function() {

    if(!props.loginState) props.loginCallback();
    history.push("/");
  }

  return (
    <section className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
          <img
            className="logo"
            src="/icons/coloredLogo.png"
            alt="logo icon"
          />
        <div className="signin_title">
          Sign in
        </div>
        <form className={classes.form}>
          {isError && <div style={{color:'red'}}>{isError}</div>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              onClick={ validateUser }
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
              <Link href="#" variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  );
}