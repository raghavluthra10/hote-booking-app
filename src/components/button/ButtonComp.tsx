import React, { FC } from "react";
import {
  // createStyles,
  withStyles,
  // makeStyles,
  Theme,
} from "@material-ui/core/styles";
import { grey, red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

interface Props {
  children: string;
  color?: string;
  width?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const ButtonComp: FC<Props> = ({ children, onClick, color, width }) => {
  // const [buttonColor, setButtonColor] = useState<any>(grey);
  // const [buttonWidth, setButtonWidth] = useState<any>("");

  // useEffect(() => {
  //   if (color === "red") {
  //     setButtonColor(red);
  //   }

  //   if (width !== "") {
  //     setButtonWidth(width);
  //   }
  // }, []);

  const RedButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(red[900]),
      width: width,
      backgroundColor: red[900],
      "&:hover": {
        backgroundColor: red[800],
      },
    },
  }))(Button);

  const GreyButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(grey[900]),
      width: width,
      backgroundColor: grey[900],
      "&:hover": {
        backgroundColor: grey[800],
      },
    },
  }))(Button);

  return (
    <>
      {color === "red" ? (
        <RedButton
          // style={{ width: buttonWidth }}
          onClick={onClick}
        >
          {children}
        </RedButton>
      ) : (
        <GreyButton onClick={onClick}>{children}</GreyButton>
      )}
    </>
  );
};

export default ButtonComp;
