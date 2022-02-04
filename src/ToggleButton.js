import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useTheme } from "@mui/styles";

const ToggleButton = props => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;
  const borderColor = "1px " + color + " solid";
  const useStyles = makeStyles({
    button: {
      "&.MuiButton-root": {
        border: borderColor,
      },
      "&.MuiButton-text": {
        color: color
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={props.onClick}
        variant="text"
        className={classes.button}
        // style={{
        //   borderRadius: 35,
        //   backgroundColor: color,
        //   padding: "18px 36px",
        //   fontSize: "18px",
        //   borderColor: color,
        // }}
      >
        Toggle Theme
      </Button>
    </div>
  );
};

export default ToggleButton;
