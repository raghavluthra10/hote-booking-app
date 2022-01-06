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

interface SignUpForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = () => {
    const [ signUpForm, setSignUpForm ] = useState<SignUpForm>({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const history = useHistory();

    const authUser = () => {
        if(signUpForm.email === '') {
            alert('Please enter an email');
            return
        };

        if(signUpForm.password === '') {
            alert("Please enter a password");
            return;
        };

        if(signUpForm.confirmPassword === '') {
            alert('Please re-enter your password');
            return;
        };

        if(signUpForm.password !== signUpForm.confirmPassword) {
            alert('Passwords don\'t match');
            return;
        };

        console.log(signUpForm);
    };

    const classes = useStyles();


    return (
            <div className="auth">
                <div className="authFormContainer">
                    <form className="authForm"  >
                        <div className="authInputDiv" >
                            <label>Email:</label>
                            <input  type="email"
                                value={signUpForm.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSignUpForm({...signUpForm, email: e.target.value})}
                            />
                        </div>

                        <div className="authInputDiv" >
                            <label>Password:</label>
                            <input type="password" 
                                value={signUpForm.password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSignUpForm({...signUpForm, password: e.target.value})}
                            />
                        </div>

                        <div className="authInputDiv" >
                            <label>Confirm Password:</label>
                            <input type="password" 
                                value={signUpForm.confirmPassword}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSignUpForm({...signUpForm, confirmPassword: e.target.value})}
                            />
                        </div>

                        <ColorButton variant="contained" onClick={authUser} color="primary" className={classes.margin} >
                            Sign Up
                        </ColorButton>

                        <div className="authRedirectToSignUp" >
                            Already a user? <span> <Link to='/login' > Click here </Link> </span> to Login.
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default SignUp;