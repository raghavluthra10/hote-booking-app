import React, { FC, useEffect, useState } from 'react';
import { createStyles, withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


interface Props {
  children: string;
  variant?: any;
  color?: any;
  width?: any;
  onClick: (e: any) => any;
}

const ButtonComp:FC<Props> = ({ children, onClick, color, width }) => {


  const [ buttonColor, setButtonColor ] = useState<any>(grey);
  const [ buttonWidth, setButtonWidth ] = useState<any>('');
  
  useEffect(() => {
    if (color === 'red') {
      setButtonColor(red);
    }

    if(width !== '') {
      setButtonWidth(width);
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
              style={{ width: buttonWidth }}
              onClick={onClick}
              >
              {children}
            </ColorButton>  
        </>
    );
};

export default ButtonComp;