import React, { useState } from "react";
import { Header } from "../Components/Common";
import { Box } from "@mui/system";
import { Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const LoginPage = () => {

    const [email, setEmail] = useState('');

    const handleEmail = (e) => {
        let currentValue = e.target.value;
        if(currentValue) {
            setEmail(currentValue);
        }
        console.log(e.target.value);
    }

  return (
    <Box sx={{ width: "100%", heigth: "100%" }}>
      <Box sx={{ width: "100%", background: "#FFFFFF" }}>
        <Header />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "20%",
          background: "#FFFFFF",
          border: "1px solid #000000",
          height: "400px",
          marginLeft: "40%",
          marginTop: "4%",
          padding: "40px",
          flexDirection: "column",
          gap:'20px'
        }}
      >
        <Typography>Log in</Typography>
        <Box>
          <TextField
            variant="outlined"
            value={email}
            onChange={(event) => handleEmail(event)}
            sx={{
              width: "100%",
              fontFamily: "Open Sans",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "6px",
              borderColor: "#dadada",
              background: "#fff",
              "& .MuiInputBase-root": {
                height: "40px",
                padding: "0px 16px",
              },
              "& .MuiInputBase-input": {
                padding: "0px",
              },
            }}
            placeholder="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton> 
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
