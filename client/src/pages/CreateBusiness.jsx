import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { Box, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Done } from "@mui/icons-material";
import WeekdaySelector from "../components/WeekdaySelector";
import HourSelector from "../components/HourSelector";

const CreateBusiness = ({ setShowAddBusiness, addBusiness }) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;
  const tgBgColor = tg.backgroundColor;

  const textColor = tgColorScheme === "dark" ? "white" : "black";

  const [nameText, setNameText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [phoneText, setPhoneText] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [durationText, setDurationText] = useState("");

  const [selectedDays, setSelectedDays] = useState([]);

  const [times, setTimes] = useState([{ startTime: "", endTime: "" }]);

  const nameTextHandler = (event) => {
    setNameText(event.target.value);
  };
  const locationTextHandler = (event) => {
    setLocationText(event.target.value);
  };
  const phoneTextHandler = (event) => {
    setPhoneText(event.target.value);
  };
  const aboutTexthandler = (event) => {
    setAboutText(event.target.value);
  };

  const durationTexthandler = (event) => {
    setDurationText(event.target.value);
  };

  return (
    <Box
      mb={5}
      style={{
        backgroundColor: tgBgColor ? tgBgColor : "#eee",
        width: "100%",
      }}
    >
      <Paper
        style={{
          backgroundColor: tgBgColor ? tgBgColor : "#eee",
          paddingTop: 16,
          paddingBottom: 16,
          width: "100%",
          borderRadius: 0,
        }}
        elevation={0}
      >
        <Box display={"flex"} justifyContent={"space-between"} p={2}>
          <IconButton color="primary" onClick={() => setShowAddBusiness(false)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography color={textColor} variant="h6">
            Create Business
          </Typography>
          <IconButton
            color="primary"
            onClick={() => {
              addBusiness(nameText, locationText);
              setShowAddBusiness(false);
            }}
          >
            <Done />
          </IconButton>
        </Box>
      </Paper>
      <Stack style={{ padding: 16 }}>
        <TextField
          onChange={nameTextHandler}
          value={nameText}
          id="filled-basic"
          label="Business Name"
          // variant="outlined"
          InputProps={{
            sx: { backgroundColor: "#fff", borderRadius: 30, border: "none" },
          }}
        />
        <TextField
          id="filled-basic"
          label="Location"
          onChange={locationTextHandler}
          value={locationText}
          // variant="outlined"
          style={{ marginTop: 16 }}
          InputProps={{
            sx: { backgroundColor: "#fff", borderRadius: 30, border: "none" },
          }}
        />
        <TextField
          id="filled-basic"
          label="Phone Number"
          onChange={phoneTextHandler}
          value={phoneText}
          // variant="outlined"
          style={{ marginTop: 16 }}
          InputProps={{
            sx: { backgroundColor: "#fff", borderRadius: 30, border: "none" },
          }}
        />
        <TextField
          id="filled-basic"
          label="About"
          onChange={aboutTexthandler}
          value={aboutText}
          // variant="outlined"
          style={{ marginTop: 16 }}
          InputProps={{
            sx: { backgroundColor: "#fff", borderRadius: 30, border: "none" },
          }}
        />
        <Typography color={textColor} mt={3} variant="h6">
          Working Days
        </Typography>
        <WeekdaySelector
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
        <Box
          mt={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Typography color={textColor} variant="h6">
            Working Hours
          </Typography>
          {/* <IconButton onClick={handleAddHourSelector}>
            <AddCircleRounded />
          </IconButton> */}
        </Box>
        <Stack
          mt={3}
          direction={"row"}
          spacing={2}
          width={"100%"}
          justifyContent={"center"}
        >
          <Stack
            display={"flex"}
            direction={"column"}
            width={"50%"}
            spacing={3}
          >
            <HourSelector times={times} setTimes={setTimes} />
          </Stack>
        </Stack>
        {console.log(times.map((time, index) => time))}
        <Typography color={textColor} mt={3} variant="h6">
          Meeting Duration
        </Typography>
        <Box>
          <TextField
            id="filled-basic"
            label="Duration"
            onChange={durationTexthandler}
            value={durationText}
            // variant="outlined"
            style={{ marginTop: 16 }}
            InputProps={{
              sx: {
                backgroundColor: "#fff",
                borderRadius: 30,
                border: "none",
              },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default CreateBusiness;
