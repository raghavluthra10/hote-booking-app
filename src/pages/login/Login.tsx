import { TextField, Paper, Grid, Box, createStyles, makeStyles } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
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
    }
  }),
);


interface LoginForm {
    email: string;
    password: string;
}

const Login = () => {

    const classes = useStyles();

    const [ loginForm, setLoginForm ] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const history = useHistory();

    const authUser = (e: any ) => {
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
                        value={loginForm.email}
                        onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                    />

                    <TextField 
                        className={classes.inputField}
                        id="standard-basic" 
                        label="Password" 
                        type="password" 
                        value={loginForm.password}
                        onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                    />

                    <ButtonComp onClick={authUser} >
                        Login
                    </ButtonComp>
        
                    <div className={classes.redirect} >
                        Not a user? <Link to='/signUp' > <span className={classes.clickHere} > Click here  </span> </Link> to Sign Up.
                    </div>

                    </Box>
                </Paper>
            
        </Grid> 

);
};

export default Login;
















// <div className="auth">
//     <div className="authFormContainer">
//         <form className="authForm" >
//             <div className="authInputDiv" >
//                 <label>Email:</label>
//                 <input  type="email" 
//                     value={loginForm.email} 
//                     onChange={e => setLoginForm({...loginForm, email: e.target.value})} 
//                     />
//             </div>

//             <div className="authInputDiv" >
//                 <label>Password:</label>
//                 <input type="password"  
//                     value={loginForm.password} 
//                     onChange={e => setLoginForm({...loginForm, password: e.target.value})} 
//                     />
//             </div>

//             <ButtonComp onClick={authUser} >
//                 Login
//             </ButtonComp>

//             <div className="authRedirectToSignUp" >
//                 Not a user? <span> <Link to='/signUp' > Click here </Link> </span> to Sign Up.
//             </div>
//         </form>
//     </div>
// </div>