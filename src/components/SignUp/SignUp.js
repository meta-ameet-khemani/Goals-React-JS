import { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import CustomTextfield from "../UI/CustomTextfield";
import CustomButton from "../UI/CustomButton";
import { useNavigate } from "react-router-dom";

const NewSignUp = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signInClickHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.getValue());
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography component="h1" variant="h5" color="white">
            Sign Up
          </Typography>
        </Box>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          noValidate
          sx={{ width: "35%" }}
        >
          <CustomTextfield
            id="name"
            label="Name"
            type="text"
            dark="true"
            ref={nameRef}
          />
          <CustomTextfield
            id="email"
            label="Email Address"
            ref={emailRef}
            dark="true"
          />
          <CustomTextfield
            id="password"
            label="Password"
            type="password"
            dark="true"
            ref={passwordRef}
          />
          <br />
          {/* <center> */}
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "white" }}
                value="remember"
                color="default"
              />
            }
            label="I want to receive some promotioanl notifications via email"
            style={{ color: "white" }}
            sx={{ mt: 2 }}
          />
          {/* </center> */}
          <CustomButton
            dark="true"
            fullWidth
            label="Sign Up"
            variant="contained"
            sx={{ mt: 1.5, mb: 1 }}
            onClick={signInClickHandler}
          />
          <Grid container>
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <Link
                // href="/logIn"
                onClick={() => navigate("/logIn")}
                variant="body2"
                underline="always"
                style={{
                  color: "white",
                  textDecorationColor: "white",
                  cursor: "pointer",
                }}
              >
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default NewSignUp;
