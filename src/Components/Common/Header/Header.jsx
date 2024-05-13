import React from "react";
import { NavBar, SearchBar } from "../../Common";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: "Open Sans",
        alignItems:'center'
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
