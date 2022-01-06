import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createStyles, withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';


const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(grey[900]),
      backgroundColor: grey[900],
      '&:hover': {
        backgroundColor: grey[800],
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

interface LoginForm {
    email: string;
    password: string;
}

const Login = () => {

    const [ loginForm, setLoginForm ] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const history = useHistory();

    const authUser = (e: any )=> {
        e.preventDefault();
        if(loginForm.email === '') {
            alert('Please enter email');
            return;
        };

        if(loginForm.password === '') {
            alert('Please enter password');
            return;
        };
        
        console.log(loginForm);
    };


    const classes = useStyles();

    return (
            <div className="auth">
                <div className="authFormContainer">
                    <form className="authForm" >
                        <div className="authInputDiv" >
                            <label>Email:</label>
                            <input  type="email" 
                                value={loginForm.email} 
                                onChange={e => setLoginForm({...loginForm, email: e.target.value})} 
                                />
                        </div>

                        <div className="authInputDiv" >
                            <label>Password:</label>
                            <input type="password"  
                                value={loginForm.password} 
                                onChange={e => setLoginForm({...loginForm, password: e.target.value})} 
                                />
                        </div>

                        <ColorButton variant="contained" 
                        onClick={authUser} 
                        color="primary" 
                        className={classes.margin} 
                        >
                            Login
                        </ColorButton>

                        <div className="authRedirectToSignUp" >
                            Not a user? <span> <Link to='/signUp' > Click here </Link> </span> to Sign Up.
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default Login;