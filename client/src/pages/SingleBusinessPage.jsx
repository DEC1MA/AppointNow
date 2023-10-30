import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TimeSelector from "../components/TimeSelector";
import StringAvatar from "../components/StringAvatar";
import Calendar from "../components/Calendar";
import { Check } from "@mui/icons-material";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";

const SingleBusinessPage = ({
  info,
  setShowSingleBusiness,
  showSingleBusiness,
  setSingleBusiness,
  SingleBusiness,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  addEvent,
}) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;

  const textColor = tgColorScheme === "dark" ? "white" : "black";
  return (
    <Box>
      <Box>
        <Box display={"flex"} p={3} justifyContent={"space-between"}>
          <IconButton
            color="primary"
            onClick={() => setShowSingleBusiness(false)}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              addEvent(SingleBusiness._id, selectedDate, selectedTime);
              setShowSingleBusiness(false);
            }}
            color="primary"
          >
            <Check />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          p={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <StringAvatar text={SingleBusiness && SingleBusiness.name} />

          <Box display={"flex"} flexDirection={"column"} p={1}>
            <Box display="flex">
              <CorporateFareRoundedIcon />
              <Typography color={textColor}>
                {SingleBusiness && SingleBusiness.name}
              </Typography>
            </Box>
            <Box display={"flex"}>
              <LocationOnIcon />
              <Typography color={textColor}>
                {SingleBusiness && SingleBusiness.location}
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} p={1}>
            {SingleBusiness.workingHours.map((hour) => (
              <Box display="flex">
                <AccessTimeIcon />
                <Typography color={textColor}>
                  {hour.startTime}-{hour.endTime}
                </Typography>
              </Box>
            ))}
            <Box display={"flex"}>
              <TimelapseIcon />
              <Typography color={textColor}>
                {SingleBusiness.duration}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box px={2}>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Box>
      <Box p={2}>
        <TimeSelector
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </Box>
    </Box>
  );
};

export default SingleBusinessPage;
