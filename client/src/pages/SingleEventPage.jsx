import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import StringAvatar from "../components/StringAvatar";
import { cancelEvent } from "../utilities/event";

const SingleEventPage = ({
  setShowSingleAppointment,
  showSingleAppointment,
  SingleEvent,
  setSingleEvent,
  info,
}) => {
  const startTime = new Date(SingleEvent.startTime);

  // Format the date and time using toLocaleString()
  const formattedDate = startTime.toLocaleString();

  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;

  const queryString = tg.initData;
  const queryParams = new URLSearchParams(queryString);

  const userJson = queryParams.get("user");
  const user = JSON.parse(decodeURIComponent(userJson));

  const token = user && user.id;
  // const token = "1111";
  // const token = "2222";

  const textColor = tgColorScheme === "dark" ? "white" : "black";
  return (
    <div>
      <Box>
        <Box display={"flex"} p={2}>
          <IconButton
            color="primary"
            onClick={() => {
              setShowSingleAppointment(false);
              setSingleEvent("");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            p={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <StringAvatar
              text={
                SingleEvent.business
                  ? SingleEvent.business.name
                  : SingleEvent.user.firstName + " " + SingleEvent.user.lastName
              }
            />

            <Box display={"flex"} flexDirection={"column"} p={1}>
              <Typography color={textColor}>
                {SingleEvent.business
                  ? SingleEvent.business.name
                  : SingleEvent.user.firstName +
                    " " +
                    SingleEvent.user.lastName}
              </Typography>
              <Typography color={textColor}>{formattedDate}</Typography>
            </Box>
          </Box>
          <Button
            style={{ borderRadius: "20px" }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {
              cancelEvent(SingleEvent._id, token);
              window.location.reload();
            }}
          >
            Cancel Appointment
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SingleEventPage;
