import { Box, Card, Typography } from "@mui/material";
import React from "react";

const CardsList = () => {
    return(
        <Box sx={{display:'flex', flexDirection:'column', width:'50%', gap:'20px', height:'100%'}}>
            <Typography sx={{textAlign:'left', fontFamily:'Open Sans', fontWeight:'bold'}}>HeadLine 1</Typography>
            <Card sx={{height:'200px', textAlign:'center', boxShadow:'0px 0px 2px 2px #00000033'}}>card1</Card>
            <Typography sx={{textAlign:'left', fontFamily:'Open Sans', fontWeight:'bold'}}>HeadLine 2</Typography>
            <Card sx={{height:'200px', textAlign:'center', boxShadow:'0px 0px 2px 2px #00000033'}}>card2</Card>
            <Typography sx={{textAlign:'left', fontFamily:'Open Sans', fontWeight:'bold'}}>HeadLine 3</Typography>
            <Card sx={{height:'200px', textAlign:'center', boxShadow:'0px 0px 2px 2px #00000033'}}>card1</Card>
            <Typography sx={{textAlign:'left', fontFamily:'Open Sans', fontWeight:'bold'}}>HeadLine 4</Typography>
            <Card sx={{height:'200px', textAlign:'center', boxShadow:'0px 0px 2px 2px #00000033'}}>card1</Card>
            <Typography sx={{textAlign:'left', fontFamily:'Open Sans', fontWeight:'bold'}}>Headline 5</Typography>
            <Card sx={{height:'200px', textAlign:'center', boxShadow:'0px 0px 2px 2px #00000033'}}>card1</Card>
        </Box>
    )
}

export default CardsList;