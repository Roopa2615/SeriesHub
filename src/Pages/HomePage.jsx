import React, { useEffect, useState } from "react";
import { Header } from "../Components/Common";
import { Box } from "@mui/system";
import SideBar from "../Components/SideBar";
import CardsList from "../Components/CardsList";
import axios from 'axios';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/series")
      .then((res) => {
        console.log('res', res )
        setData(res.data)})
      .catch((err) => console.log(err.message));
  }, []);

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
            '@media (max-width: 1023px)': {
              marginLeft:'15%'
            }
          }}
        >
          <CardsList data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
