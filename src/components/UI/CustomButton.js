import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useTheme } from "@mui/styles";

const CustomButton = props => {
  const theme = useTheme();
  const color = props.dark ? theme.palette.secondary.main : theme.palette.primary.main;
  const borderColor = (props.noborder ? '0px' : '1px') + color + " solid";
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
        fullWidth={props.fullWidth || false}
        onClick={props.onClick || null }
        variant={props.variant || "text"}
        className={classes.button}
        {...props}
        // style={{
        //   borderRadius: 35,
        //   backgroundColor: color,
        //   padding: "18px 36px",
        //   fontSize: "18px",
        //   borderColor: color,
        // }}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default CustomButton;