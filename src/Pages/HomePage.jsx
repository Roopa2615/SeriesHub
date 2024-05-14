import React from "react";
import { Header } from "../Components/Common";
import { Box } from "@mui/system";
import SideBar from "../Components/SideBar";
import CardsList from "../Components/CardsList";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%", heigth: "100%" }}>
      <Box sx={{ position: "fixed", width: "100%", background: "#FFFFFF" }}>
        <Header />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            position: "fixed",
            marginTop: "60px",
            padding: "10px",
          }}
        >
          <SideBar />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25%",
            marginTop: "80px",
            width: "100%",
            height: "100%",
            marginBottom: "40px",
            gap: "30px",
          }}
        >
          <CardsList />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
