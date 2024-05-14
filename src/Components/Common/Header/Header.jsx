import React from "react";
import { NavBar } from "../../Common";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: "Open Sans",
        alignItems:'center',
        padding:'10px' 
      }}
    >
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontWeight: 800,
          fontSize: "30px",
          fontStyle: "italic",
          color: "#1976d8",
        }}
      >
        SERIES HUB
      </Typography>
      <SearchBar />
      <NavBar />
    </Box>
  );
};

export default Header;
