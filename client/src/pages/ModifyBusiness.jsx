import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Done } from "@mui/icons-material";
import WeekdaySelector from "../components/WeekdaySelector";
import HourSelector from "../components/HourSelector";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateBusiness } from "../utilities/business";

const ModifyBusiness = ({ setShowEditBusiness, selectedBusiness }) => {
  const tg = window.Telegram.WebApp;
  const tgColorScheme = tg.colorScheme;
  const tgBgColor = tg.backgroundColor;

  const queryString = tg.initData;
  const queryParams = new URLSearchParams(queryString);

  const userJson = queryParams.get("user");
  const user = JSON.parse(decodeURIComponent(userJson));

  const token = user && user.id;
  // const token = "1111";
  // const token = "2222";

  const textColor = tgColorScheme === "dark" ? "white" : "black";

  const [nameText, setNameText] = useState(selectedBusiness?.name);
  const [locationText, setLocationText] = useState(selectedBusiness?.location);
  const [phoneText, setPhoneText] = useState(selectedBusiness?.phone);
  const [aboutText, setAboutText] = useState(selectedBusiness?.about);
  const [durationText, setDurationText] = useState(selectedBusiness?.duration);

  const [selectedDays, setSelectedDays] = useState(
    selectedBusiness?.workingDays
  );

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

  const submitHandler = (
    businessId,
    name,
    about,
    location,
    phone,
    workingDays,
    workingHours,
    duration
  ) => {
    updateBusiness(
      businessId,
      name,
      about,
      location,
      phone,
      workingDays,
      workingHours,
      duration,
      token
    );
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
          <IconButton
            color="primary"
            onClick={() => setShowEditBusiness(false)}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography color={textColor} variant="h6">
            Modify Business
          </Typography>
          <IconButton
            color="primary"
            onClick={() => {
              submitHandler(
                selectedBusiness._id,
                nameText,
                aboutText,
                locationText,
                phoneText,
                selectedDays,
                times,
                durationText
              );
              setShowEditBusiness(false);
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
        <Box p={3}>
          {/* <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {}}
          >
            Remove Business
          </Button> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default ModifyBusiness;
