import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import { 
    TextField, Paper, Grid, Box, createStyles, makeStyles, RadioGroup, FormControlLabel, FormControl, FormLabel, Radio 
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
import ButtonComp from '../../components/button/ButtonComp';



const useStyles = makeStyles((theme) =>
  createStyles({
    paperContainer: {
        borderRadius: 10,
        width: 400
    },
    loginBox: {
        padding: 30,
    },
    inputField: {
        marginBottom: 15

    },
    redirect: {
        fontSize: 12,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 5
    },
    clickHere: {
        color: grey[900]
    },
    radioButton: {
        display: 'flex !important'
    }
  }),
);


interface SignUpForm {
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

const SignUp:FC = () => {
    const [ signUpForm, setSignUpForm ] = useState<SignUpForm>({
        email: '',
        password: '',
        confirmPassword: '',
        role: 'customer'
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
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >

            <Paper elevation={3} className={classes.paperContainer}  >
                <Box 
                display='flex'
                flexDirection="column"
                className={classes.loginBox}
                >
                <TextField 
                    className={classes.inputField}
                    id="standard-basic" 
                    label="Email" 
                    value={signUpForm.email}
                    onChange={e => setSignUpForm({...signUpForm, email: e.target.value})}
                />

                <TextField 
                    className={classes.inputField}
                    id="standard-basic" 
                    label="Password" 
                    type="password" 
                    value={signUpForm.password}
                    onChange={e => setSignUpForm({...signUpForm, password: e.target.value})}
                />

                <TextField 
                    className={classes.inputField}
                    id="standard-basic" 
                    label="Confirm Password" 
                    type="password" 
                    value={signUpForm.confirmPassword}
                    onChange={e => setSignUpForm({...signUpForm, confirmPassword: e.target.value})}
                />

                <FormLabel component="legend" className={classes.inputField} >Sign up as: </FormLabel>
                    <RadioGroup 
                        aria-label="role"
                        name="role" value={signUpForm.role} 
                        className={classes.radioButton}
                        onChange={(e) => setSignUpForm({...signUpForm, role: e.target.value})}>
                        <FormControlLabel value="hotelOwner" control={<Radio />} label="Hotel owner" />
                        <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                </RadioGroup>

                <ButtonComp onClick={authUser} >
                    Sign ip
                </ButtonComp>
    
                <div className={classes.redirect} >
                    Already a user? <Link to='/login' > <span className={classes.clickHere} > Click here  </span> </Link> to Login.
                </div>

                </Box>
            </Paper>
        
    </Grid> 

    );
};

export default SignUp;