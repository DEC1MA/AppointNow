import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import StringAvatar from "../components/StringAvatar";

const SingleEventPage = ({
  setShowSingleAppointment,
  showSingleAppointment,
  SingleEvent,
  setSingleEvent,
  info,
}) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;

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
            <StringAvatar text={SingleEvent.name} />

            <Box display={"flex"} flexDirection={"column"} p={1}>
              <Typography color={textColor}>{SingleEvent.name}</Typography>
              <Typography color={textColor}>{SingleEvent.date}</Typography>
            </Box>
          </Box>
          <Button
            style={{ borderRadius: "20px" }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {}}
          >
            Cancel Appointment
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SingleEventPage;
