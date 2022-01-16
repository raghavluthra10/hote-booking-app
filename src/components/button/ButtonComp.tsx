import React, { FC } from 'react';
import { createStyles, withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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

interface Props {
  children: string;
  variant?: any;
  onClick: (e: any) => any;
}

const ButtonComp:FC<Props> = ({ children, onClick }) => {

  const classes = useStyles();

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