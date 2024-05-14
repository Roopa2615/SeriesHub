import { Box, Link, Tooltip, Typography } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { popularShows } from "../../Constants/PopularShows";

const SideBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "none",
        gap: "10px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontWeight: "bold",
          fontSize: "16px",
          width: "100%",
          textAlign: "left",
        }}
      >
        Popular
      </Typography>
      {popularShows && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          {popularShows.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <a
                href=""
                sx={{
                  borderRadius: "5px",
                }}
              >
                <img
                  src={item.path}
                  alt="series"
                  style={{
                    width: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </a>
              <Link
                key={item.id}
                sx={{
                  textTransform: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontFamily: "Open Sans",
                  fontSize: "14px",
                  color: "#0d0d0d",
                }}
              >
                {item.title}
              </Link>
              <Tooltip title="Verified Partner">
                <VerifiedIcon sx={{ width: "12px" }} />
              </Tooltip>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
