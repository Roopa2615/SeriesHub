import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';

const SideBar = () => {
  const popularShows = [
    {
      id: 1,
      title: "HW News Network",
      path: "https://s2.dmcdn.net/u/9Z4kJ1Yryecy2RkkM/120x120",
    },
    {
      id: 2,
      title: "OutlookIndia",
      path: "https://s1.dmcdn.net/u/9GuJY1bPlTkyUbnRk/120x120",
    },
    {
      id: 3,
      title: "HW News English",
      path: "https://s2.dmcdn.net/u/9axCH1YWyrrkdpWre/120x120",
    },
    {
      id: 4,
      title: "HW News Marathi",
      path: "https://s1.dmcdn.net/u/9aV-a1YVsMJG472Cs/120x120",
    },
    {
      id: 5,
      title: "Comedy Tadka",
      path: "https://s1.dmcdn.net/u/9aIp21YgjJkL6a-O-/120x120",
    },
    {
      id: 6,
      title: "Tuk Tuk Tv",
      path: "https://s2.dmcdn.net/u/9Xgy91ZkfZRg0D-c0/120x120",
    },
    {
      id: 7,
      title: "Moxx Music Bhakti",
      path: "https://s2.dmcdn.net/u/9cuvV1YejVCKHVjSS/120x120",
    },
    {
      id: 8,
      title: "Aaj Tak",
      path: "https://s2.dmcdn.net/u/6DJwr1af-zjsucxoa/120x120",
    },
    {
      id: 9,
      title: "India Today",
      path: "https://s2.dmcdn.net/u/1IpKF1ZD3FwraBvqV/120x120",
    },
    {
      id: 10,
      title: "New Nation",
      path: "https://s2.dmcdn.net/u/8F6W71bQmwmlZUz9H/120x120",
    },
  ];

  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textTransform: "none",
        }}
      >
        <Typography
          sx={{ fontFamily: "Open Sans", fontWeight: "bold", fontSize: "16px" }}
        >
          Popular
        </Typography>
        {popularShows && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {popularShows.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "6px",
                  padding: "10px 0px",
                  alignItems: "center"
                }}
              >
                <a
                  sx={{
                    borderRadius: "5px"
                  }}
                >
                  <img
                    src={item.path}
                    alt="image"
                    style={{ width: "25px", borderRadius: "5px", cursor:'pointer' }}
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
                <VerifiedIcon sx={{width:'12px'}} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
  );
};

export default SideBar;
