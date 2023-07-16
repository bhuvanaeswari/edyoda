import { Typography } from "@mui/material";
import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ClosedCaptionDisabledIcon from "@mui/icons-material/ClosedCaptionDisabled";
import { Box } from "@mui/material";

const LeftSubcriptionContainer = () => {
  const listArray = [
    {
      icon: <MenuBookIcon sx={{ fontSize: 45 }} />,
      text: "100+ job relevant courses",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 45 }} />,
      text: "20,000+ Hours of content",
    },
    {
      icon: <LiveTvIcon sx={{ fontSize: 45 }} />,
      text: "Exclusive webinar access",
    },
    {
      icon: <CardGiftcardIcon sx={{ fontSize: 45 }} />,
      text: "Scholarship worth ₹94,500",
    },
    {
      icon: <ClosedCaptionDisabledIcon sx={{ fontSize: 45 }} />,
      text: "Ad free learning experiences",
    },
  ];
  const formatText = (text) => {
    return text.replace(
      /([₹,]?\d+(?:\+)?)(?=\D|$)/g,
      "<span style='color: skyblue'>$&</span>"
    ).replace(
      /\b(exclusive|ad free)\b/gi,
      "<span style='color: skyblue'>$&</span>"
    );
  };
  return (
    <div style={{ width: "65%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "65%",
        //   border: "1px solid red",
          marginTop: "50px",
          marginLeft:"30px"
        }}
      >
        <Typography
          sx={{ marginTop: "20px", fontSize: "35px", fontWeight: "400" }}
        >
          Access curated courses worth{" "}
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
              color: "inherit",
            }}
          >
            ₹18,500
          </span>{" "}
          at just <span style={{ color: "skyblue" }}>₹ 99</span> per year!
        </Typography>
        <Box sx={{ marginTop: "20px", marginLeft: "40px" }}>
          {listArray.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Box sx={{ marginRight: "30px" }}>{item.icon}</Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "20px" }}
                dangerouslySetInnerHTML={{ __html: formatText(item.text) }}
              ></Typography>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default LeftSubcriptionContainer;
