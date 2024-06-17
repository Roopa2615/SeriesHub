import { Box, Card, Link, Typography, Button, Tooltip } from "@mui/material";
import React from "react";
import { newsFeed } from "../../Constants/NewsFeed";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendOutlinedIcon from "@mui/icons-material/Send";
import "./cardList.css";
import robot from '../../assets/svgs/yellow-robot-with-white-ruler-his-hand_967785-63256.jpg'

const CardsList = ({ data }) => {
  let availableData = data.length ? data : newsFeed;

  const icons = [
    { id: 1, iconName: <FavoriteBorderIcon style={{ width: "20px" }} /> },
    { id: 2, iconName: <BookmarkBorderIcon style={{ width: "20px" }} /> },
    {
      id: 3,
      iconName: (
        <SendOutlinedIcon
          style={{ width: "20px", transform: "rotate(325deg)" }}
        />
      ),
    },
  ];
  return (
    <>
      {availableData &&
        availableData.map((card) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
              gap: "6px",
              height: "100%",
              '@media (max-width: 765px)':{
                width: "90%",
              }
            }}
            key={card.id}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <a
                href=""
                sx={{
                  borderRadius: "5px",
                }}
              >
                <img
                  src={card.path}
                  alt="series"
                  style={{
                    width: "25px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </a>
              <Link
                sx={{
                  textAlign: "left",
                  fontFamily: "Sans Serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  textDecoration: "none",
                  color: "#000000",
                }}
              >
                {card.title}
              </Link>
              <Tooltip title="Verified Partner">
                <VerifiedIcon sx={{ width: "12px" }} />
              </Tooltip>
              <Button
                sx={{
                  textTransform: "capitalize",
                  background:
                    "linear-gradient(228deg, #fab3f7 9%, #f682f2 48%, #a2a2fb 94%)",
                  padding: "3px 8px",
                  fontSize: "13px",
                  color: "#000",
                  fontFamily: "ABCFavorit,Arial,Helvetica,sans-serif",
                  borderRadius: "8px",
                  fontWeight: 500,
                }}
              >
                Follow
              </Button>
            </Box>
            {card.headline && (
              <Box sx={{ textAlign: "left", width: "90%" }}>
                <Typography>{card.headline}</Typography>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "10px",
                '@media (max-width: 765px)':{
                  flexDirection: "column",
                  width:'80%'
                }
              }}
            >
              <Card
                sx={{
                  height: "200px",
                  textAlign: "center",
                  boxShadow: "0px 0px 2px 2px #00000033",
                  width: "100%",
                  backgroundImage: `url(${robot})`,
                  backgroundPosition: 'center',
                  backgroundRepeat:'no-repeat',
                  backgroundSize:'contain',  
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                News Feed
              </Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "10px",
                  '@media (max-width: 765px)':{
                    flexDirection: "row",
                  }
                }}
              >
                {icons &&
                  icons.map((icon) => (
                    <button
                      key={icon.id}
                      id="icon-button"
                      style={{
                        border: "#f8f8f8",
                        borderRadius: "9px",
                        background: "#f8f8f8",
                        cursor: "pointer",
                      }}
                    >
                      {icon.iconName}
                    </button>
                  ))}
              </Box>
            </Box>
          </Box>
        ))}
    </>
  );
};

export default CardsList;
