import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    let currentValue = event.target.value;
    if (currentValue) {
      setSearchValue(currentValue);
    } else {
      setSearchValue("");
    }
  };

  const handleClose = () => {
    setSearchValue("");
  };

  return (
    <Box sx={{ width: "35%" }}>
      <TextField
        variant="outlined"
        value={searchValue}
        onChange={(event) => handleSearch(event)}
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
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: searchValue && (
            <InputAdornment position="end">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
