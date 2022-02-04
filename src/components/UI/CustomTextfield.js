import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";

const CustomTextfield = forwardRef((props, ref) => {
  const theme = useTheme();
  const color = props.dark ? theme.palette.secondary.main : theme.palette.primary.main;
  const bottomGap = props.extrabottom ?? 0;
  const useStyles = makeStyles({
    textField: {
      marginTop: 15,
      marginBottom: bottomGap,
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
  const fieldRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        const value = fieldRef.current.value;
        // fieldRef.current.value = "";
        return value;
      },
      resetValue: () => {
        fieldRef.current.value = "";
      },
    };
  });

  return (
    <TextField
      autoFocus={props.autoFocus || false}
      label={props.label || ""}
      id="filled-margin-dense"
      type={props.type || "text"}
      fullWidth={props.fullWidth || true}
      className={classes.textField}
      variant={props.variant || "outlined"}
      inputRef={fieldRef}
      {...props}
      //   style={{ margin: 30 }}
      //   color="primary"
    />
  );
});

export default CustomTextfield;
