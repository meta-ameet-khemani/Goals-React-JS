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

const NewLogin = () => {

  const emailRef = useRef();
  const navigate = useNavigate();

  const signInClickHandler = (e) => {
    e.preventDefault();
    console.log(emailRef.current.getValue());
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
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
            Sign in
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Link
              // href="/signUp"
              onClick={() => navigate('/signUp')}
              variant="body1"
              underline="always"
              style={{ color: "white", textDecorationColor: "white", cursor: 'pointer' }}
            >
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "35%" }}
        >
          <br />
          <CustomTextfield
            id="email"
            label="Email Address"
            ref={emailRef}
            dark="true"
          />
          <br />
          <br />
          <CustomTextfield
            id="password"
            label="Password"
            type="password"
            dark="true"
          />
          <br />
          <br />
          <center>
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "white" }}
                  value="remember"
                  color="default"
                />
              }
              label="Remember me"
              style={{ color: "white" }}
            />
          </center>
          <CustomButton
            dark="true"
            fullWidth
            label="Sign In"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={signInClickHandler}
          />
          <Grid container>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Link
                // href="#"
                onClick={() => navigate('/logIn')}
                variant="body2"
                underline="always"
                style={{ color: "white", textDecorationColor: "white", cursor: 'pointer' }}
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default NewLogin;
