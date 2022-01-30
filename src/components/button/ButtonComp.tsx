import React, { FC, useEffect, useState } from 'react';
import { createStyles, withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme: Theme) =>
createStyles({
  margin: {
    margin: theme.spacing(1),
  },
}),
);

interface Props {
  children: string;
  variant?: any;
  color?: any;
  onClick: (e: any) => any;
}

const ButtonComp:FC<Props> = ({ children, onClick, color }) => {

  const classes = useStyles();

  const [ buttonColor, setButtonColor ] = useState<any>(grey);
  
  useEffect(() => {
    if (color === 'red') {
      setButtonColor(red);
    }
  }, []);


  const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(buttonColor[900]),
      backgroundColor: buttonColor[900],
      '&:hover': {
        backgroundColor: buttonColor[800],
      },
    },
  }))(Button);


  const buttonVariantOptions = ['outlined', 'contained']

    return (
        <>
            <ColorButton 
              className={classes.margin}
              onClick={onClick}
              >
              {children}
            </ColorButton>  
        </>
    );
};

export default ButtonComp;