import React from "react";
import { Header } from "../Components/Common";
import { Box } from "@mui/system";
import SideBar from "../Components/SideBar";
import CardsList from "../Components/CardsList";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%", heigth: "100%" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          gap: "280px",
        }}
      >
        <SideBar />
        <CardsList />
      </Box>
    </Box>
  );
};

export default HomePage;
