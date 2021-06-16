// Import react pre-built functions and axios
import { UserContext } from '../UserContext'
import { useHistory } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';

// Import Material-UI
import { Button, Link, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgb(83, 140, 223)',
    borderRadius: '20px 0 0 20px',
    height: '100vh',
    width: '100%',
    margin: 0,
  },
  paper: {
    width:'25vw',
    zIndex: '999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(6)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
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
  const {setUserName} = useContext(UserContext);

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
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', width: '100%', height: '90%'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginRight:'120px', zIndex:'999'}}>
          <div style={{fontSize:'42px', color:'whitesmoke', display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'10px'}}>
            <div>Bookkeeping made easy</div>
            <div>with smart scan.</div>
          </div>
          <img
          src="/illustration.png"
          alt="Illustration"
          style={{width:'50vh', height:'50vh'}}/>
        </div>
          <div className={classes.paper}>
            <div style={{display:'flex', alignItems:'center', marginBottom:'10px'}}>
              <img
                style={{width:'90px', height:'90px'}}
                src="/icons/noBGLogo.png"
                alt="signIn-logo"
              />
              <div style={{fontSize:'38px', color:'white', marginTop:'6px'}}>Bookify</div>
            </div>
          <form className={classes.form}>
            {isError && <div style={{color:'red'}}>{isError}</div>}
            <TextField
            style={{
              backgroundColor: "white", borderRadius:'10px'
              }}
              variant="filled"
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
            style={{
              backgroundColor: "white", borderRadius:'10px'
              }}
              variant="filled"
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
              style={{marginTop:'10px', backgroundColor:'#303F9F', borderRadius:'10px'}}
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
                  <div style={{color:'white', marginTop:'10px'}}>Forgot password?</div>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  <div style={{color:'white', marginTop:'10px'}}>Sign Up</div>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <img
      src="/bg.png"
      alt="background"
      style={{position:'fixed', bottom:'0'}}/>
    </section>
  );
}