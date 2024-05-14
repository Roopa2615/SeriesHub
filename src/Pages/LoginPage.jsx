import React from "react";
import { Header } from "../Components/Common";
import { Box } from "@mui/system";

const LoginPage = () => {

  return (
    <Box sx={{ width: "100%", heigth: "100%" }}>
      <Box sx={{ width: "100%", background: "#FFFFFF" }}>
        <Header />
        Login
      </Box>
    </Box>
  );
};

export default LoginPage;
