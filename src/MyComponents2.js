import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";

const MyComponents2 = forwardRef((props, ref) => {
  const theme = useTheme();
  // console.log(theme.palette.secondary.main);
  const color = theme.palette.secondary.main;
  const useStyles = makeStyles({
    textField: {
      width: "50%",
      "& label": {
        color: color,
      },
      "& input": {
        color: color,
      },
      "& label.Mui-focused": {
        color: color,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: color,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: color,
        },
        "&:hover fieldset": {
          borderColor: color,
        },
        "&.Mui-focused fieldset": {
          borderColor: color,
        },
      },
    },
  });
  const classes = useStyles();
  const textRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        const value = textRef.current.value;
        textRef.current.value = '';
        return value;
      }
    }
  });

  return (
    <TextField
      inputRef={textRef}
      label="Dense"
      style={{ margin: 30 }}
      id="filled-margin-dense"
      // defaultValue="bar"
      className={classes.textField}
      color="secondary"
      // helperText="bar"
      // margin="dense"
    />
  );
  // return (
  //   <center>
  //     <br />
  //     <br />
  //     <div>
  //       <TextField
  //         label="Dense"
  //         // style={{ margin: 30 }}
  //         id="filled-margin-dense"
  //         defaultValue="bar"
  //         className={classes.textField}
  //         helperText="bar"
  //         margin="dense"
  //       />
  //       <TextField
  //         id="filled-full-width"
  //         label="Label"
  //         style={{ margin: 8 }}
  //         placeholder="Placeholder"
  //         helperText="Full width!"
  //         fullWidth
  //         margin="normal"
  //         InputLabelProps={{
  //           shrink: true,
  //         }}
  //         variant="filled"
  //       />
  //       <TextField
  //         label="None"
  //         id="filled-margin-none"
  //         defaultValue="foo"
  //         className={classes.textField}
  //         helperText="foo"
  //       />
  //       <br />
  //     </div>
  //   </center>
  // );
});

export default MyComponents2;
