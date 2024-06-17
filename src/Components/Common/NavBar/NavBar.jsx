import { Box, Button } from "@mui/material";
import React, {useState} from "react";
import { styled } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import SignUpIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const ButtonWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems:'center'
});

const NavBar = () => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          '@media(max-width:765px)': {
            display:'none'
          }
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
          '@media(max-width:765px)': {
            display:'none'
          }
        }}
        startIcon={<SignUpIcon />}
        onClick={handleSignUp}
      >
        Sign up
      </Button>
      <Button
        variant="contained"
        sx={{
          fontFamily: "Open Sans",
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: "14px",
          backgroundColor: "#000000",
          borderRadius: "6px",
          height: "40px",
          width:'10px',
          padding: "5px",
          display:'none',
          cursor:'pointer',
          '@media(max-width:765px)': {
            display:'block'
          }
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PermIdentityIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogin}>Log In</MenuItem>
        <MenuItem onClick={handleSignUp}>Sign up</MenuItem>
      </Menu>
    </ButtonWrapper>
  );
};

export default NavBar;
