import { Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import SignUpIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const ButtonWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

const NavBar = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  return (
    <ButtonWrapper>
      <Button
        variant="outlined"
        sx={{
          fontFamily: "Open Sans",
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: "14px",
          borderRadius: "6px",
          height: "40px",
          padding: "18px",
        }}
        startIcon={<LoginIcon />}
        onClick={handleLogin}
      >
        Log In
      </Button>
      <Button
        variant="contained"
        sx={{
          fontFamily: "Open Sans",
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: "14px",
          backgroundColor: "#1976d8",
          borderRadius: "6px",
          height: "40px",
          padding: "18px",
        }}
        startIcon={<SignUpIcon />}
        onClick={handleSignUp}
      >
        Sign up
      </Button>
    </ButtonWrapper>
  );
};

export default NavBar;
